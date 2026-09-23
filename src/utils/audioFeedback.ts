/**
 * Subtle tactile mechanical audio feedback for scroll detents and interactions.
 * Synthesizes a delicate, organic haptic click via the Web Audio API.
 */

class AudioFeedbackService {
  private ctx: AudioContext | null = null;
  private soundEnabled: boolean = true;
  private lastPlayTime: number = 0;

  constructor() {
    // Check localStorage preference if available
    try {
      const stored = localStorage.getItem('portfolio_sound_enabled');
      if (stored !== null) {
        this.soundEnabled = stored === 'true';
      }
    } catch {
      this.soundEnabled = true;
    }
  }

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  public isEnabled(): boolean {
    return this.soundEnabled;
  }

  public setEnabled(enabled: boolean) {
    this.soundEnabled = enabled;
    try {
      localStorage.setItem('portfolio_sound_enabled', String(enabled));
    } catch {
      // ignore
    }
  }

  public toggle(): boolean {
    const next = !this.soundEnabled;
    this.setEnabled(next);
    if (next) {
      this.playDetentClick(1600, 0.05);
    }
    return next;
  }

  /**
   * Play a crisp, ultra-subtle mechanical tick when scrolling past a section node
   */
  public playDetentClick(frequency = 1450, volume = 0.035) {
    if (!this.soundEnabled) return;

    const now = performance.now();
    // Throttle to avoid audio stutter on rapid scrolling (at least 70ms between clicks)
    if (now - this.lastPlayTime < 70) return;
    this.lastPlayTime = now;

    try {
      this.initCtx();
      if (!this.ctx) return;

      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      // Bandpass shaping for woody/mechanical tick
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(frequency, t);
      filter.Q.setValueAtTime(4.0, t);

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(frequency, t);
      osc.frequency.exponentialRampToValueAtTime(frequency * 0.4, t + 0.012);

      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.linearRampToValueAtTime(volume, t + 0.001);
      gain.gain.exponentialRampToValueAtTime(0.00001, t + 0.018);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.02);
    } catch {
      // gracefully fail if audio permissions are blocked
    }
  }

  /**
   * Subtle soft click on manual click of navigation links
   */
  public playTapClick() {
    this.playDetentClick(1800, 0.045);
  }
}

export const audioFeedback = new AudioFeedbackService();
