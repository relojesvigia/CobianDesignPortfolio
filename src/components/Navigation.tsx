import React from 'react';
import { audioFeedback } from '@/src/utils/audioFeedback';

interface NavigationProps {
  currentTab: 'design' | 'videography';
  onSelectTab: (tab: 'design' | 'videography') => void;
  onNavigateToContact?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentTab,
  onSelectTab,
}) => {
  const handleTabChange = (tab: 'design' | 'videography') => {
    audioFeedback.playTapClick();
    onSelectTab(tab);
  };

  return (
    <nav className="w-full pt-8 sm:pt-12 pb-4 px-6 sm:px-10 lg:px-12 flex items-center justify-between" aria-label="Main Navigation">
      {/* Design and Videography only at the very top */}
      <div className="flex items-center gap-10 sm:gap-14">
        <button
          onClick={() => handleTabChange('design')}
          className={`font-serif-editorial text-2xl sm:text-3xl tracking-tight transition-all duration-200 cursor-pointer py-1 ${
            currentTab === 'design'
              ? 'text-[#221B16] font-normal underline decoration-[1.5px] underline-offset-8'
              : 'text-[#8E867E] hover:text-[#382E27]'
          }`}
        >
          Design
        </button>

        <button
          onClick={() => handleTabChange('videography')}
          className={`font-serif-editorial text-2xl sm:text-3xl tracking-tight transition-all duration-200 cursor-pointer py-1 ${
            currentTab === 'videography'
              ? 'text-[#221B16] font-normal underline decoration-[1.5px] underline-offset-8'
              : 'text-[#8E867E] hover:text-[#382E27]'
          }`}
        >
          Videography
        </button>
      </div>
    </nav>
  );
};
