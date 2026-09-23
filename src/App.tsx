/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from 'react';
import { portfolioData, PortfolioProject } from '@/src/data/portfolioData';
import { Navigation } from '@/src/components/Navigation';
import { RightSidebar } from '@/src/components/RightSidebar';
import { CVSection } from '@/src/components/CVSection';
import { ProjectsOverview } from '@/src/components/ProjectsOverview';
import { ProjectDetail } from '@/src/components/ProjectDetail';
import { ContactSection } from '@/src/components/ContactSection';
import { VideographyView } from '@/src/components/VideographyView';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'design' | 'videography'>('design');
  const [activeId, setActiveId] = useState<string>('who-am-i');
  const [scrollPercent, setScrollPercent] = useState<number>(0);

  // Collect all section/sub-section element IDs to monitor
  const getMonitoredIds = useCallback((): string[] => {
    const ids: string[] = ['who-am-i', 'curriculum-vitae', 'projects-overview'];
    portfolioData.projects.forEach((p: PortfolioProject) => {
      ids.push(p.id);
      p.subSections.forEach((sub) => {
        ids.push(`${p.id}-${sub.id}`);
      });
    });
    ids.push('contact-section');
    ids.push('contact-details');
    return ids;
  }, []);

  // Update scroll percentage and active section on scroll
  useEffect(() => {
    if (currentTab !== 'design') return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const doc = document.documentElement;
          const totalHeight = doc.scrollHeight - window.innerHeight;
          const currentScroll = window.scrollY;

          // Compute overall progress percentage (0 - 100)
          const percent = totalHeight > 0 ? (currentScroll / totalHeight) * 100 : 0;
          setScrollPercent(Math.min(100, Math.max(0, percent)));

          // Find current active element based on viewport position
          const monitoredIds = getMonitoredIds();
          const viewportCheckY = window.innerHeight * 0.28; // Check focal band at ~28% from top

          let currentActive = monitoredIds[0];

          for (const id of monitoredIds) {
            const el = document.getElementById(id);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= viewportCheckY) {
                currentActive = id;
              }
            }
          }

          setActiveId(currentActive);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial evaluation
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentTab, getMonitoredIds]);

  // Smooth scroll to selected section
  const handleNavigate = (id: string) => {
    if (id === 'the-designer' || id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveId('who-am-i');
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveId(id);
    }
  };

  const handleNavigateToContact = () => {
    if (currentTab !== 'design') {
      setCurrentTab('design');
      setTimeout(() => handleNavigate('contact-section'), 100);
    } else {
      handleNavigate('contact-section');
    }
  };

  // Helper for bold keyword rendering in Who Am I intro (doubled in size)
  const renderIntroText = () => {
    const text = portfolioData.designer.whoAmIParagraph;
    const boldWords = portfolioData.designer.whoAmIBoldWords;
    const escaped = boldWords.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const regex = new RegExp(`(${escaped.join('|')})`, 'gi');
    const parts = text.split(regex);

    return (
      <p className="flex items-start gap-3 sm:gap-4 text-2xl sm:text-3xl md:text-4xl lg:text-[38px] text-[#241D17] leading-[1.3] font-normal">
        <span className="text-3xl sm:text-4xl lg:text-[42px] text-[#221B16] leading-none shrink-0 mt-1 sm:mt-1.5">•</span>
        <span>
          {parts.map((part, i) => {
            const isBold = boldWords.some(
              (b) => b.toLowerCase() === part.toLowerCase()
            );
            return isBold ? (
              <strong key={i} className="font-bold text-[#110D0A]">
                {part}
              </strong>
            ) : (
              <span key={i}>{part}</span>
            );
          })}
        </span>
      </p>
    );
  };

  return (
    <div className="min-h-screen bg-[#F6F4F0] text-[#221F1E] font-sans selection:bg-[#EAE5DC] selection:text-[#1F1A17]">
      {/* Design & Videography Switcher at the very top (No top menu bar) */}
      <Navigation
        currentTab={currentTab}
        onSelectTab={(tab) => setCurrentTab(tab)}
      />

      {/* Main Layout Area */}
      {currentTab === 'design' ? (
        <div className="relative flex justify-between min-h-screen">
          {/* Main Scrollable Content Container */}
          <main className="w-full lg:pr-[235px] xl:pr-[250px] transition-all">
            <div className="max-w-[940px] mx-auto px-6 sm:px-10 lg:px-12 py-8 sm:py-12">
              {/* ================= SECTION: WHO AM I? ================= */}
              <section
                id="who-am-i"
                className="scroll-mt-24 pt-16 sm:pt-24 pb-28 sm:pb-36 max-w-4xl mx-auto"
              >
                {/* Title in handwritten style, centered */}
                <h1 className="font-bryndan text-6xl sm:text-7xl md:text-8xl text-[#221B16] mb-12 tracking-tight text-center">
                  Who am I?
                </h1>

                {/* Bullet text with bold keywords (doubled size) */}
                <div className="pl-1 sm:pl-2">
                  {renderIntroText()}
                  <p className="pl-7 sm:pl-9 text-base sm:text-lg text-[#6E6459] mt-6 leading-relaxed max-w-3xl font-normal">
                    {portfolioData.designer.secondaryBio}
                  </p>

                  {/* Three sides of practice from the portfolio positioning */}
                  <div className="pl-7 sm:pl-9 mt-12 pt-8 border-t border-[#DFD7CC]/60 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
                    {portfolioData.designer.practicePillars.map((pillar) => (
                      <div key={pillar.category}>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C8276] block mb-1.5 font-mono">
                          {pillar.category}
                        </span>
                        <p className="text-xs text-[#524941] leading-relaxed">
                          {pillar.items}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ================= SECTION: CURRICULUM VITAE ================= */}
              <CVSection />

              {/* ================= SECTION: PROJECTS OVERVIEW ================= */}
              <ProjectsOverview onSelectProject={handleNavigate} />

              {/* ================= DETAILED CASE STUDIES (Spacious unboxed sections) ================= */}
              <div className="space-y-36 sm:space-y-48">
                {portfolioData.projects.map((project) => (
                  <ProjectDetail key={project.id} project={project} />
                ))}
              </div>

              {/* ================= FINAL CONTACT SECTION ================= */}
              <ContactSection />
            </div>
          </main>

          {/* Right Sidebar Progress & Section Tracker (Desktop fixed & Mobile drawer) */}
          <RightSidebar
            activeId={activeId}
            onNavigate={handleNavigate}
            scrollPercent={scrollPercent}
          />
        </div>
      ) : (
        /* ================= VIDEOGRAPHY VIEW ================= */
        <main className="min-h-screen">
          <VideographyView />
        </main>
      )}
    </div>
  );
}
