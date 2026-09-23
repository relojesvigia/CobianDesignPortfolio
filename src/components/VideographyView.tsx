import React, { useState } from 'react';
import {
  Play,
  Film,
  Clock,
  User,
  X,
  MessageCircle,
  ExternalLink,
  Sliders,
  Smartphone,
  Sparkles,
  Award,
} from 'lucide-react';
import { portfolioData, VideoProject } from '@/src/data/portfolioData';
import { audioFeedback } from '@/src/utils/audioFeedback';

export const VideographyView: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<VideoProject | null>(null);

  const featuredReel = portfolioData.videography.find(
    (v) => v.id === 'fpv-showreel'
  ) || portfolioData.videography[0];

  const brandJobs = portfolioData.videography.filter((v) =>
    ['shimano-fest', 'kaeser-mexico', 'now-angel-ricardo-rios'].includes(v.id)
  );

  const personalContent = portfolioData.videography.find(
    (v) => v.id === 'rocket-league-content'
  );

  const handlePlayVideo = (video: VideoProject) => {
    audioFeedback.playTapClick();
    setActiveVideo(video);
  };

  return (
    <div className="max-w-[1060px] mx-auto px-6 sm:px-10 py-16 sm:py-24 animate-in fade-in duration-300">
      {/* Intro Header from User Document */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8C8276] block mb-3 font-mono">
          FPV Pilot · Aerial Videographer · Camera Operator
        </span>
        <h1 className="font-bryndan text-6xl sm:text-7xl text-[#221B16] tracking-tight mb-5">
          FPV & Aerial Videography
        </h1>
        <p className="text-base sm:text-lg text-[#6E645A] leading-relaxed max-w-2xl mx-auto mb-6">
          My work in FPV and aerial videography combines piloting, camera control, composition, and visual storytelling to capture movement, environments, and products from unique perspectives. Over the years, I&apos;ve worked across sports, events, commercial productions, and independent projects.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-[#8A8177]">
          {['FPV', 'Aerial', 'Sports', 'Events', 'Commercial', 'Cinematography'].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-[#EAE4DA]/70 text-[#4E443B] text-[11px]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-28 sm:space-y-36">
        {/* ============================================================ */}
        {/* SECTION 01: FEATURED SHOWREEL (Widescreen 16:9) */}
        {/* ============================================================ */}
        {featuredReel && (
          <section className="scroll-mt-24">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8C8276] font-mono">
                01 — Featured Showreel
              </span>
              <span className="text-xs font-mono text-[#8C8276]">
                {featuredReel.year}
              </span>
            </div>

            {/* Cinematic Video Container */}
            <div
              className="relative aspect-video w-full rounded-2xl bg-[#181310] overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#DFD7CC]/60"
              onClick={() => handlePlayVideo(featuredReel)}
            >
              <img
                src={featuredReel.posterImage}
                alt={featuredReel.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Centered Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 group-hover:bg-white text-[#241D17] flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110">
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
                </div>
              </div>

              {/* Bottom metadata banner */}
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white text-xs">
                <span className="font-medium tracking-wide bg-black/60 px-3 py-1 rounded-full backdrop-blur-xs">
                  {featuredReel.clientOrType}
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[11px] bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-xs">
                  <Clock className="w-3.5 h-3.5" />
                  {featuredReel.duration}
                </span>
              </div>
            </div>

            {/* Video Details */}
            <div className="pt-6 sm:pt-8 flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="max-w-2xl">
                <h2 className="font-bryndan text-4xl sm:text-5xl text-[#221B16] mb-3">
                  {featuredReel.title}
                </h2>
                <p className="text-sm text-[#665D54] leading-relaxed mb-4">
                  {featuredReel.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs text-[#524941]">
                  <div className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#8A8177]" />
                    <span className="font-medium">{featuredReel.role}</span>
                  </div>

                  {featuredReel.tags && featuredReel.tags.length > 0 && (
                    <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#8C8276]">
                      <span>Tags:</span>
                      <span>{featuredReel.tags.join(' · ')}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="shrink-0 flex items-center gap-3">
                <button
                  onClick={() => handlePlayVideo(featuredReel)}
                  className="px-6 py-3 bg-[#2E241E] hover:bg-[#1C1612] text-white text-xs font-semibold rounded-full transition-all cursor-pointer shadow-xs flex items-center justify-center gap-2"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Watch Featured Reel</span>
                </button>
              </div>
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* SECTION 02: BRAND JOBS — 3 COLUMN VERTICAL FORMAT */}
        {/* ============================================================ */}
        <section className="scroll-mt-24 pt-6 border-t border-[#DFD8CE]/80">
          {/* Section Header with Brand Work Calling */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8C8276] font-mono">
                02 — Professional & Brand Work
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#984E29]/10 text-[#984E29] text-[10px] font-mono font-bold tracking-wider uppercase">
                Brand Jobs
              </span>
            </div>
            <h2 className="font-bryndan text-4xl sm:text-5xl text-[#221B16] mb-3">
              Commercial Projects
            </h2>
            <p className="text-sm sm:text-base text-[#6E645A] leading-relaxed">
              A selection of client commissions, athletic events, and cultural exhibitions produced specifically in vertical 9:16 format for social media channels, high-engagement reels, and mobile viewing.
            </p>
          </div>

          {/* 3 COLUMN GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 lg:gap-8 items-start">
            {brandJobs.map((video, idx) => (
              <article
                key={video.id}
                className="group flex flex-col h-full bg-[#EFEBE4]/30 rounded-3xl p-4 sm:p-5 border border-[#DFD7CC]/60 hover:border-[#C4B8A8] transition-all duration-300"
              >
                {/* Vertical Video Phone/Reel Mockup */}
                <div
                  onClick={() => handlePlayVideo(video)}
                  className="relative aspect-[9/16] w-full rounded-2xl bg-[#16120E] overflow-hidden group cursor-pointer shadow-md group-hover:shadow-xl transition-all duration-500 border border-[#DFD7CC]/80"
                >
                  <img
                    src={video.posterImage}
                    alt={video.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />

                  {/* Scrim Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/35 pointer-events-none" />

                  {/* Top Badges (Brand Job indicator) */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono font-bold uppercase tracking-wider text-white border border-white/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#984E29] animate-pulse" />
                      Brand Job
                    </span>
                  </div>

                  {/* Centered Play Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/90 group-hover:bg-white text-[#221B16] flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110">
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Bottom overlay inside the reel */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                    <span className="text-[10px] font-mono text-[#DDD5C7] uppercase tracking-wider block mb-1">
                      {video.duration} · {video.year}
                    </span>
                    <h3 className="font-bryndan text-xl text-white leading-tight drop-shadow-sm">
                      {video.title}
                    </h3>
                  </div>
                </div>

                {/* Details below the vertical video */}
                <div className="pt-4 flex flex-col justify-between grow">
                  <div>
                    <div className="flex items-baseline justify-between gap-2 mb-1.5">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8A8177]">
                        0{idx + 1} · {video.year}
                      </span>
                      <span className="text-[10px] font-mono text-[#984E29] font-semibold">
                        Social Media
                      </span>
                    </div>

                    <h3 className="font-bryndan text-2xl text-[#221B16] mb-1.5">
                      {video.title}
                    </h3>

                    <div className="text-[11px] font-semibold text-[#8C7A6B] mb-2.5">
                      {video.clientOrType}
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-[#524941] mb-3">
                      <User className="w-3.5 h-3.5 text-[#8A8177] shrink-0" />
                      <span className="font-medium text-[11px]">{video.role}</span>
                    </div>

                    <p className="text-xs text-[#665D54] leading-relaxed mb-4">
                      {video.description}
                    </p>
                  </div>

                  {/* Action button */}
                  <button
                    onClick={() => handlePlayVideo(video)}
                    className="w-full mt-auto py-2.5 px-4 rounded-full bg-[#EAE4DA] hover:bg-[#DDD5C7] text-[#2E241E] text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer group-hover:bg-[#2E241E] group-hover:text-white"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Watch Video</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 03: ROCKET LEAGUE CONTENT & EDUCATION */}
        {/* ============================================================ */}
        {personalContent && (
          <section className="scroll-mt-24 pt-6 border-t border-[#DFD8CE]/80">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8C8276] font-mono">
                03 — Content & Education
              </span>
              <span className="text-xs font-mono text-[#8C8276]">
                {personalContent.year}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div
                className="md:col-span-7 relative aspect-video rounded-2xl bg-[#181310] overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#DFD7CC]/60"
                onClick={() => handlePlayVideo(personalContent)}
              >
                <img
                  src={personalContent.posterImage}
                  alt={personalContent.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 group-hover:bg-white text-[#241D17] flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110">
                    <Play className="w-7 h-7 fill-current ml-0.5" />
                  </div>
                </div>

                <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-white text-xs">
                  <span className="font-medium bg-red-600/90 px-3 py-1 rounded-full backdrop-blur-xs text-[11px]">
                    60K+ YouTube Audience
                  </span>
                  <span className="font-mono text-[11px] bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-xs">
                    Watch Feature
                  </span>
                </div>
              </div>

              <div className="md:col-span-5 space-y-4">
                <span className="text-xs font-mono text-[#8C8276]">
                  {personalContent.clientOrType}
                </span>
                <h3 className="font-bryndan text-3xl sm:text-4xl text-[#221B16]">
                  {personalContent.title}
                </h3>
                <p className="text-sm text-[#665D54] leading-relaxed">
                  {personalContent.description}
                </p>

                <div className="flex items-center gap-2 text-xs text-[#524941] pb-2">
                  <User className="w-4 h-4 text-[#8A8177]" />
                  <span className="font-medium">{personalContent.role}</span>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  {personalContent.videoUrl && (
                    <a
                      href={personalContent.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                        audioFeedback.playTapClick();
                      }}
                      className="px-5 py-2.5 bg-[#EAE4DA] hover:bg-[#DDD5C7] text-[#2E241E] text-xs font-semibold rounded-full transition-all inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Open on YouTube</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <button
                    onClick={() => handlePlayVideo(personalContent)}
                    className="px-5 py-2.5 bg-[#2E241E] hover:bg-[#1C1612] text-white text-xs font-semibold rounded-full transition-all cursor-pointer shadow-xs flex items-center gap-2"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Watch Video</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* ============================================================ */}
      {/* VIDEO LIGHTBOX MODAL (Supports 9:16 vertical and 16:9 widescreen) */}
      {/* ============================================================ */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div
            className={`relative w-full ${
              activeVideo.aspectRatio === '9:16'
                ? 'max-w-[360px] aspect-[9/16]'
                : 'max-w-4xl aspect-video'
            } bg-[#141210] rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col`}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 text-white shrink-0 bg-black/50">
              <div className="flex items-center gap-2.5 truncate">
                {activeVideo.aspectRatio === '9:16' ? (
                  <Smartphone className="w-4 h-4 text-[#DDD5C7] shrink-0" />
                ) : (
                  <Film className="w-4 h-4 text-[#DDD5C7] shrink-0" />
                )}
                <h3 className="font-bryndan text-base sm:text-lg text-white truncate">
                  {activeVideo.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors ml-2 shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Video Player Frame */}
            <div className="relative w-full h-full bg-black flex items-center justify-center grow overflow-hidden">
              {activeVideo.youtubeId ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              ) : (
                <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center text-white/90">
                  <img
                    src={activeVideo.posterImage}
                    alt={activeVideo.title}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover opacity-35"
                  />
                  <div className="relative z-10 max-w-sm bg-black/75 backdrop-blur-md p-6 rounded-2xl border border-white/15 shadow-xl">
                    {activeVideo.aspectRatio === '9:16' ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#984E29]/30 text-[#E7A887] text-[10px] font-mono uppercase tracking-wider mb-3 border border-[#984E29]/40">
                        <Smartphone className="w-3 h-3" />
                        Brand Work
                      </span>
                    ) : (
                      <Film className="w-8 h-8 text-[#DDD5C7] mx-auto mb-2" />
                    )}
                    <h4 className="font-bryndan text-2xl text-white mb-1.5">
                      {activeVideo.title}
                    </h4>
                    <p className="text-[11px] font-mono text-[#DDD5C7] mb-3">
                      {activeVideo.clientOrType} · {activeVideo.year}
                    </p>
                    <p className="text-xs text-white/80 mb-5 leading-relaxed">
                      {activeVideo.description}
                    </p>
                    <a
                      href={portfolioData.designer.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-[#0C1A10] text-xs font-bold rounded-full hover:bg-[#20ba5a] transition-all shadow-md"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Request Full Reel or Production</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* SECTION 04: VIDEO PRODUCTION TOOLKIT & GEAR NOTE */}
      {/* ============================================================ */}
      <div className="mt-28 rounded-2xl border border-[#DFD7CC]/60 bg-[#EFECE6]/40 p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-3">
          <Sliders className="w-5 h-5 text-[#8C7A6B]" />
          <h3 className="font-bryndan text-2xl sm:text-3xl text-[#2B231D]">
            Video Production Toolkit
          </h3>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
          <span className="text-base font-bold text-[#1E1712]">
            DaVinci Resolve
          </span>
          <span className="text-[10px] font-bold tracking-wider px-2.5 py-1 bg-[#E3DBD0] text-[#3E342B] rounded uppercase font-mono w-fit">
            EXPERT
          </span>
        </div>
        <p className="text-xs sm:text-sm text-[#5C5349] leading-relaxed mb-4">
          Advanced video editing, color grading, compositing, and visual production with calibrated color workflows.
        </p>
        <p className="text-xs text-[#8A8177] italic">
          Camera & FPV gear setup configured per production requirements (cinematic custom FPV quads, full-frame camera packages, and ultra-smooth gyro stabilization).
        </p>
      </div>

      {/* Direct Inquiries Footer for Videography */}
      <div className="mt-20 pt-14 border-t border-[#DFD8CD] text-center">
        <h3 className="font-bryndan text-4xl text-[#241D17] mb-3">
          Need commercial or documentary videography?
        </h3>
        <p className="text-sm text-[#73695F] mb-8">
          Available for commercial reels, product films, sports coverage, and FPV documentation worldwide.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${portfolioData.designer.email}`}
            onClick={() => audioFeedback.playTapClick()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#EAE4DA] hover:bg-[#DDD5C7] text-[#2E241E] text-xs font-semibold rounded-full transition-all"
          >
            <span>Email: {portfolioData.designer.email}</span>
          </a>
          <a
            href={portfolioData.designer.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => audioFeedback.playTapClick()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1F1A15] hover:bg-[#342B23] text-white text-xs font-semibold rounded-full transition-all shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
            <span>Discuss Videography on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
