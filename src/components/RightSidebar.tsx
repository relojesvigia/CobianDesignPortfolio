import React, { useEffect, useState, useRef } from 'react';
import { User, Mail, ChevronLeft, Volume2, VolumeX } from 'lucide-react';
import { portfolioData, PortfolioProject } from '@/src/data/portfolioData';
import { audioFeedback } from '@/src/utils/audioFeedback';

interface RightSidebarProps {
  activeId: string;
  onNavigate: (id: string) => void;
  scrollPercent: number;
}

export interface SidebarNode {
  id: string;
  type: 'designer' | 'project' | 'contact';
  label: string;
  number?: string;
  subItems: { id: string; label: string }[];
}

export const RightSidebar: React.FC<RightSidebarProps> = ({
  activeId,
  onNavigate,
  scrollPercent,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(audioFeedback.isEnabled());
  const lastActiveRef = useRef(activeId);

  // Play subtle mechanical click when active section changes
  useEffect(() => {
    if (activeId && activeId !== lastActiveRef.current) {
      audioFeedback.playDetentClick();
      lastActiveRef.current = activeId;
    }
  }, [activeId]);

  // Construct dynamic sidebar nodes from portfolioData
  const nodes: SidebarNode[] = [
    {
      id: 'the-designer',
      type: 'designer',
      label: 'THE DESIGNER',
      subItems: [
        { id: 'who-am-i', label: 'Who am I?' },
        { id: 'curriculum-vitae', label: 'Curriculum Vitae' },
        { id: 'projects-overview', label: 'Projects' },
      ],
    },
    ...portfolioData.projects.map((p: PortfolioProject) => ({
      id: p.id,
      type: 'project' as const,
      number: p.number,
      label: `PROJECT ${parseInt(p.number, 10)}`,
      subItems: p.subSections.map((sub) => ({
        id: `${p.id}-${sub.id}`,
        label: sub.label,
      })),
    })),
    {
      id: 'contact-section',
      type: 'contact',
      label: 'CONTACT',
      subItems: [
        { id: 'contact-details', label: 'Get in touch' },
      ],
    },
  ];

  // Helper to check if a node or its subitems are currently active or completed
  const isItemActive = (id: string) => activeId === id;
  const isNodeActive = (node: SidebarNode) => {
    return activeId === node.id || node.subItems.some((s) => s.id === activeId);
  };

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    const state = audioFeedback.toggle();
    setSoundOn(state);
  };

  const handleItemClick = (id: string) => {
    audioFeedback.playTapClick();
    if (id === 'the-designer') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      onNavigate('the-designer');
    } else {
      onNavigate(id);
    }
    setMobileOpen(false);
  };

  return (
    <>
      {/* ================= COMPACT DESKTOP SIDEBAR ================= */}
      <aside
        className="hidden lg:flex flex-col w-[220px] xl:w-[235px] shrink-0 min-h-screen fixed top-0 right-0 bottom-0 bg-[#ECE8E1] border-l border-[#E2DDD5] z-30 select-none overflow-y-auto overflow-x-hidden py-4 px-3.5 xl:px-4 justify-between shadow-[-4px_0_20px_rgba(0,0,0,0.02)]"
        aria-label="Portfolio Section Progress"
      >
        {/* Compact top bar controls */}
        <div className="flex items-center justify-between pb-2 mb-1 border-b border-[#DFD9CE]/70">
          <span className="text-[10px] font-semibold tracking-wider uppercase text-[#8A8177]">
            Roadmap
          </span>
          <button
            onClick={toggleSound}
            title={soundOn ? 'Haptic sound on (Click to mute)' : 'Haptic sound muted (Click to enable)'}
            className="flex items-center gap-1 text-[10px] text-[#7A7167] hover:text-[#2A221C] transition-colors p-0.5 rounded focus:outline-none cursor-pointer"
          >
            {soundOn ? (
              <>
                <Volume2 className="w-3 h-3 text-[#3D332A]" />
                <span className="text-[9px] uppercase font-mono tracking-tighter">Sound</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3 h-3 text-[#A39A8F]" />
                <span className="text-[9px] uppercase font-mono text-[#A39A8F]">Mute</span>
              </>
            )}
          </button>
        </div>

        {/* Vertical Compact Timeline & Nodes (Fits viewport height cleanly) */}
        <div className="relative my-auto py-1">
          {/* Base pale vertical guide line */}
          <div className="absolute left-[12px] top-3 bottom-3 w-[2.5px] bg-[#DDD6CC] rounded-full" />

          {/* Dynamic dark brown progress fill line */}
          <div
            className="absolute left-[12px] top-3 w-[2.5px] bg-[#3E342B] rounded-full transition-all duration-300 ease-out"
            style={{
              height: `calc(${Math.min(100, Math.max(0, scrollPercent))}% - 6px)`,
            }}
          />

          {/* Node items stack with tight compact vertical rhythm */}
          <div className="relative flex flex-col space-y-2 sm:space-y-2.5">
            {nodes.map((node) => {
              const activeNode = isNodeActive(node);

              return (
                <div key={node.id} className="relative group">
                  {/* Node Circle & Header */}
                  <div
                    onClick={() => handleItemClick(node.id)}
                    className="flex items-center gap-2 cursor-pointer group/title"
                    title={node.id === 'the-designer' ? 'Scroll all the way to top' : undefined}
                  >
                    {/* Compact node circle */}
                    <div
                      className={`relative z-10 flex items-center justify-center w-[26px] h-[26px] rounded-full border-[1.5px] transition-all duration-200 shrink-0 ${
                        activeNode
                          ? 'bg-[#3E342B] border-[#3E342B] text-[#ECE8E1] shadow-xs scale-105'
                          : 'bg-[#D6CFC4] border-[#ECE8E1] text-white group-hover/title:bg-[#C2BAAD]'
                      }`}
                    >
                      {node.type === 'designer' ? (
                        <User className="w-3 h-3" />
                      ) : node.type === 'contact' ? (
                        <Mail className="w-3 h-3" />
                      ) : (
                        <span className="font-bryndan text-[12px] font-bold leading-none">
                          {node.number}
                        </span>
                      )}
                    </div>

                    {/* Node Title */}
                    <span
                      className={`font-bryndan text-[13px] tracking-wide uppercase transition-all duration-150 leading-tight ${
                        activeNode
                          ? 'text-[#2A221C] font-bold scale-[1.02] origin-left'
                          : 'text-[#6B6156] font-semibold group-hover/title:text-[#2A221C]'
                      }`}
                    >
                      {node.label}
                    </span>
                  </div>

                  {/* Compact sub-items list */}
                  {node.subItems && node.subItems.length > 0 && (
                    <ul className="ml-[28px] mt-0.5 space-y-0.5 border-l border-transparent pl-1.5">
                      {node.subItems.map((sub) => {
                        const active = isItemActive(sub.id);
                        return (
                          <li key={sub.id}>
                            <button
                              onClick={() => handleItemClick(sub.id)}
                              className={`text-left text-[11px] transition-all duration-150 block py-0.5 leading-tight cursor-pointer ${
                                active
                                  ? 'text-[#1F1A17] font-bold translate-x-0.5'
                                  : 'text-[#8A8075] font-normal hover:text-[#2E251F] hover:translate-x-0.5'
                              }`}
                            >
                              {sub.label}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom compact info & scroll percentage */}
        <div className="pt-2 mt-1 border-t border-[#DFD9CE]/70 flex items-center justify-between text-[10px] text-[#8C8379]">
          <span
            onClick={() => handleItemClick('the-designer')}
            className="cursor-pointer hover:text-[#2A221C] transition-colors font-medium"
            title="Scroll all the way to top"
          >
            {portfolioData.designer.name}
          </span>
          <span className="font-mono tabular-nums font-medium text-[#4A3F35]">
            {Math.round(scrollPercent)}%
          </span>
        </div>
      </aside>

      {/* ================= MOBILE FLOATING TAB & DRAWER ================= */}
      <div className="lg:hidden">
        {/* Floating edge handle */}
        <button
          onClick={() => setMobileOpen(true)}
          className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-[#3E342B] text-white pl-2 pr-1.5 py-3.5 rounded-l-xl shadow-lg flex flex-col items-center gap-1.5 hover:bg-[#2A221C] transition-all cursor-pointer"
          aria-label="Open portfolio navigation"
        >
          <span className="text-[9px] uppercase font-mono tracking-widest rotate-90 my-1.5 origin-center">
            {Math.round(scrollPercent)}%
          </span>
          <div className="w-1 h-10 bg-white/20 rounded-full relative overflow-hidden">
            <div
              className="absolute top-0 left-0 right-0 bg-white rounded-full transition-all"
              style={{ height: `${scrollPercent}%` }}
            />
          </div>
          <ChevronLeft className="w-3.5 h-3.5 text-white/80 animate-pulse" />
        </button>

        {/* Mobile slide-out drawer backdrop */}
        {mobileOpen && (
          <div
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 transition-opacity"
          />
        )}

        {/* Mobile slide-out drawer panel */}
        <div
          className={`fixed top-0 right-0 bottom-0 w-[270px] bg-[#ECE8E1] z-50 shadow-2xl p-5 flex flex-col justify-between transform transition-transform duration-300 ease-out overflow-y-auto ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-[#DFD9CE]">
            <span className="font-bryndan text-lg font-bold text-[#2A221C]">Roadmap</span>
            <button
              onClick={() => setMobileOpen(false)}
              className="w-7 h-7 rounded-full bg-[#DFD9CE] text-[#3E342B] flex items-center justify-center font-bold text-xs cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Timeline Nodes */}
          <div className="relative my-4">
            <div className="absolute left-[13px] top-3 bottom-3 w-[3px] bg-[#DDD6CC] rounded-full" />
            <div
              className="absolute left-[13px] top-3 w-[3px] bg-[#3E342B] rounded-full"
              style={{ height: `${Math.min(100, Math.max(0, scrollPercent))}%` }}
            />

            <div className="relative flex flex-col space-y-3">
              {nodes.map((node) => {
                const activeNode = isNodeActive(node);
                return (
                  <div key={node.id} className="relative">
                    <div
                      onClick={() => handleItemClick(node.id)}
                      className="flex items-center gap-2.5 cursor-pointer"
                    >
                      <div
                        className={`relative z-10 flex items-center justify-center w-[28px] h-[28px] rounded-full border-[1.5px] transition-all shrink-0 ${
                          activeNode
                            ? 'bg-[#3E342B] border-[#3E342B] text-[#ECE8E1] scale-105'
                            : 'bg-[#D6CFC4] border-[#ECE8E1] text-white'
                        }`}
                      >
                        {node.type === 'designer' ? (
                          <User className="w-3 h-3" />
                        ) : node.type === 'contact' ? (
                          <Mail className="w-3 h-3" />
                        ) : (
                          <span className="font-bryndan text-[13px] font-bold">
                            {node.number}
                          </span>
                        )}
                      </div>
                      <span
                        className={`font-bryndan text-sm uppercase ${
                          activeNode ? 'text-[#2A221C] font-bold' : 'text-[#6B6156]'
                        }`}
                      >
                        {node.label}
                      </span>
                    </div>

                    {node.subItems && (
                      <ul className="ml-[30px] mt-0.5 space-y-0.5 pl-1.5">
                        {node.subItems.map((sub) => {
                          const active = isItemActive(sub.id);
                          return (
                            <li key={sub.id}>
                              <button
                                onClick={() => handleItemClick(sub.id)}
                                className={`text-left text-[11.5px] block py-0.5 cursor-pointer ${
                                  active
                                    ? 'text-[#1F1A17] font-bold'
                                    : 'text-[#8A8075]'
                                }`}
                              >
                                {sub.label}
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer & Sound toggle */}
          <div className="pt-3 border-t border-[#DFD9CE] flex items-center justify-between text-xs text-[#8C8379]">
            <button
              onClick={toggleSound}
              className="flex items-center gap-1 text-[#3E342B] font-medium cursor-pointer"
            >
              {soundOn ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span className="text-[11px]">{soundOn ? 'Sound On' : 'Muted'}</span>
            </button>
            <span className="font-mono tabular-nums text-xs">{Math.round(scrollPercent)}%</span>
          </div>
        </div>
      </div>
    </>
  );
};
