import React, { useState } from 'react';
import { Play, Film, Clock, User, X, MessageCircle } from 'lucide-react';
import { portfolioData, VideoProject } from '@/src/data/portfolioData';
import { audioFeedback } from '@/src/utils/audioFeedback';

export const VideographyView: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<VideoProject | null>(null);

  const handlePlayVideo = (video: VideoProject) => {
    audioFeedback.playTapClick();
    setActiveVideo(video);
  };

  return (
    <div className="max-w-[1040px] mx-auto px-6 sm:px-10 py-16 sm:py-24 animate-in fade-in duration-300">
      {/* Intro Header */}
      <div className="text-center max-w-2xl mx-auto mb-24">
        <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8C8276] block mb-3">
          Selected Works & Showreel
        </span>
        <h1 className="font-bryndan text-6xl sm:text-7xl text-[#221B16] tracking-tight mb-5">
          Videography
        </h1>
        <p className="text-base text-[#6E645A] leading-relaxed">
          Cinematic brand documentaries, physical fabrication reels, and tactile macro product films captured through natural light and 35mm film emulation.
        </p>
      </div>

      {/* Videos List (Unboxed, spacious layout) */}
      <div className="space-y-32 sm:space-y-40">
        {portfolioData.videography.map((video, idx) => (
          <article
            key={video.id}
            className="transition-all"
          >
            {/* Cinematic Video Container / Poster */}
            <div
              className="relative aspect-video w-full rounded-2xl bg-[#181310] overflow-hidden group cursor-pointer shadow-lg"
              onClick={() => handlePlayVideo(video)}
            >
              <img
                src={video.posterImage}
                alt={video.title}
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
                <span className="font-medium tracking-wide bg-black/50 px-3 py-1 rounded-full backdrop-blur-xs">
                  {video.clientOrType}
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[11px] bg-black/50 px-2.5 py-1 rounded-full backdrop-blur-xs">
                  <Clock className="w-3.5 h-3.5" />
                  {video.duration}
                </span>
              </div>
            </div>

            {/* Video Details (Unboxed, clean typographic layout) */}
            <div className="pt-6 sm:pt-8 flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 text-xs font-mono text-[#8A8177] mb-2">
                  <span>0{idx + 1}</span>
                  <span>·</span>
                  <span>{video.year}</span>
                </div>
                <h2 className="font-bryndan text-4xl sm:text-5xl text-[#221B16] mb-3">
                  {video.title}
                </h2>
                <p className="text-sm text-[#665D54] leading-relaxed mb-4">
                  {video.description}
                </p>

                <div className="flex items-center gap-2 text-xs text-[#524941]">
                  <User className="w-3.5 h-3.5 text-[#8A8177]" />
                  <span className="font-medium">{video.role}</span>
                </div>
              </div>

              <div className="shrink-0 flex items-center">
                <button
                  onClick={() => handlePlayVideo(video)}
                  className="w-full sm:w-auto px-6 py-3 bg-[#2E241E] hover:bg-[#1C1612] text-white text-xs font-semibold rounded-full transition-all cursor-pointer shadow-xs flex items-center justify-center gap-2"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Watch Video</span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Video Lightbox Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-[#141210] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 text-white">
              <div className="flex items-center gap-3">
                <Film className="w-5 h-5 text-[#EFEBE4]" />
                <h3 className="font-bryndan text-xl text-white">
                  {activeVideo.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Video Player Frame */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
              <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center text-white/80">
                <img
                  src={activeVideo.posterImage}
                  alt={activeVideo.title}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="relative z-10 max-w-md bg-black/60 backdrop-blur-sm p-6 rounded-2xl border border-white/15">
                  <Film className="w-10 h-10 text-[#DDD5C7] mx-auto mb-3" />
                  <h4 className="font-bryndan text-2xl text-white mb-2">
                    {activeVideo.title}
                  </h4>
                  <p className="text-xs text-white/70 mb-4 leading-relaxed">
                    {activeVideo.description}
                  </p>
                  <p className="text-[11px] font-mono text-white/50 mb-4">
                    Format: 4K DCI · Aspect 16:9 · {activeVideo.duration} · Directed by {portfolioData.designer.name}
                  </p>
                  <a
                    href={portfolioData.designer.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-[#0C1A10] text-xs font-bold rounded-full"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Request Full Reel or Production</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Direct Inquiries Footer for Videography */}
      <div className="mt-36 pt-16 border-t border-[#DFD8CD] text-center">
        <h3 className="font-bryndan text-4xl text-[#241D17] mb-3">
          Need commercial or documentary videography?
        </h3>
        <p className="text-sm text-[#73695F] mb-8">
          Available for commercial reels, product films, and design documentation worldwide.
        </p>
        <a
          href={portfolioData.designer.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => audioFeedback.playTapClick()}
          className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1F1A15] hover:bg-[#342B23] text-white text-xs font-semibold rounded-full transition-all shadow-sm"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
          <span>Discuss Videography on WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
