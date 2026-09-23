import React from 'react';
import { featuredProjectsGrid } from '@/src/data/portfolioData';
import { audioFeedback } from '@/src/utils/audioFeedback';

interface ProjectsOverviewProps {
  onSelectProject: (targetId: string) => void;
}

export const ProjectsOverview: React.FC<ProjectsOverviewProps> = ({
  onSelectProject,
}) => {
  const handleClick = (targetId: string) => {
    audioFeedback.playTapClick();
    onSelectProject(targetId);
  };

  return (
    <section id="projects-overview" className="py-28 sm:py-36 scroll-mt-24">
      {/* Title */}
      <div className="text-center mb-16 sm:mb-20">
        <h2 className="font-bryndan text-5xl sm:text-6xl text-[#221B16] tracking-tight">
          Projects
        </h2>
      </div>

      {/* 4 Items Grid: Floating unboxed images and captions - 2 columns on mobile, 4 on desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-8 lg:gap-10">
        {featuredProjectsGrid.map((item) => (
          <div
            key={item.number}
            onClick={() => handleClick(item.targetId)}
            className="group cursor-pointer flex flex-col items-center text-center transition-all duration-300"
          >
            {/* Floating image directly on canvas (no enclosing box or border) */}
            <div className="w-full aspect-square max-w-[150px] sm:max-w-[220px] flex items-center justify-center mb-4 sm:mb-6">
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>

            {/* Labels and Project Number */}
            <div className="mt-auto">
              <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.25em] text-[#8C8276] uppercase block mb-0.5 sm:mb-1">
                PROJECT
              </span>
              <span className="font-bryndan text-2xl sm:text-3xl font-bold text-[#2A211B] block mb-1 sm:mb-2">
                {item.number}
              </span>
              <h3 className="text-xs sm:text-sm font-normal text-[#4D443B] group-hover:text-[#18130F] transition-colors leading-snug max-w-[170px] sm:max-w-[200px] mx-auto">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
