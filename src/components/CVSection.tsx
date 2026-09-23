import React, { useState } from 'react';
import {
  Sparkles,
  Wrench,
  Briefcase,
  ChevronDown,
  Mail,
  Phone,
  MessageCircle,
} from 'lucide-react';
import { portfolioData, SoftwareTool } from '@/src/data/portfolioData';
import { audioFeedback } from '@/src/utils/audioFeedback';

export const CVSection: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<SoftwareTool>(
    portfolioData.cv.softwareTools[6] || portfolioData.cv.softwareTools[0]
  );
  const [experienceOpen, setExperienceOpen] = useState(false);

  const handleToolSelect = (tool: SoftwareTool) => {
    audioFeedback.playTapClick();
    setSelectedTool(tool);
  };

  const toggleExperience = () => {
    audioFeedback.playTapClick();
    setExperienceOpen((prev) => !prev);
  };

  return (
    <section id="curriculum-vitae" className="py-28 sm:py-36 scroll-mt-24">
      {/* Section Eyebrow and Titles */}
      <div className="text-center max-w-2xl mx-auto mb-20">
        <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8C8379] block mb-3">
          {portfolioData.cv.eyebrow}
        </span>
        <h2 className="font-bryndan text-5xl sm:text-6xl text-[#241C16] mb-4 tracking-tight">
          {portfolioData.cv.title}
        </h2>
        <p className="text-base text-[#786E65] leading-relaxed max-w-xl mx-auto font-normal">
          {portfolioData.cv.subtitle}
        </p>
      </div>

      {/* Two Columns: Competencies & Software Toolkit (Unboxed, pure canvas layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-start mb-24">
        {/* Left Column: Core Competencies & Abilities */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#8C7A6B]" />
            <h3 className="font-bryndan text-3xl text-[#2B231D] tracking-tight">
              Core Competencies & Abilities
            </h3>
          </div>

          <div className="space-y-7 pt-2">
            {portfolioData.cv.competencies.map((comp, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-[#251E18] text-base">
                    {comp.title}
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] text-[#7A7167] leading-relaxed pb-1">
                  {comp.description}
                </p>
                {/* Minimalist Progress Bar */}
                <div className="w-full h-2 bg-[#E4DDD3] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#3E342B] rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${comp.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Software & Technical Toolkit */}
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Wrench className="w-5 h-5 text-[#8C7A6B]" />
              <h3 className="font-bryndan text-3xl text-[#2B231D] tracking-tight">
                Software & Technical Toolkit
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#7D746A]">
              Hover or tap any program to inspect design workflows and proficiency.
            </p>
          </div>

          {/* Program Icons Grid (4 columns) */}
          <div className="grid grid-cols-4 gap-3 sm:gap-4">
            {portfolioData.cv.softwareTools.map((tool) => {
              const isSelected = selectedTool.id === tool.id;
              return (
                <button
                  key={tool.id}
                  onClick={() => handleToolSelect(tool)}
                  onMouseEnter={() => setSelectedTool(tool)}
                  className={`aspect-square rounded-xl p-2 flex flex-col items-center justify-center transition-all duration-200 cursor-pointer relative group ${
                    isSelected
                      ? 'bg-[#EAE4DA] ring-2 ring-[#3D332A] scale-105'
                      : 'bg-[#F2ECE3]/60 hover:bg-[#EAE4DA] hover:scale-[1.02]'
                  }`}
                  title={tool.name}
                >
                  {/* App icon badge */}
                  <div
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center font-bold text-sm sm:text-base shadow-xs"
                    style={{
                      backgroundColor: tool.color,
                      color: tool.textColor,
                    }}
                  >
                    {tool.shortTag}
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-[#696056] font-medium mt-1 truncate max-w-full px-0.5">
                    {tool.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Interactive Inspection Details */}
          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 min-h-[70px] border-t border-[#DFD7CC]">
            <div className="text-xs sm:text-sm text-[#463C33] leading-relaxed">
              <span className="font-bold text-[#1E1712]">{selectedTool.name}:</span>{' '}
              {selectedTool.description}
            </div>
            <span className="shrink-0 text-[10px] font-bold tracking-wider px-2.5 py-1 bg-[#E3DBD0] text-[#3E342B] rounded-md uppercase font-mono">
              {selectedTool.level}
            </span>
          </div>
        </div>
      </div>

      {/* Professional Experience in a veeeeery subtle rounded box */}
      <div className="mb-20 rounded-2xl border border-[#DFD7CC]/60 bg-[#EFECE6]/35 p-5 sm:p-7 shadow-[0_1px_4px_rgba(0,0,0,0.015)] transition-all">
        <button
          onClick={toggleExperience}
          className="w-full flex items-center justify-between cursor-pointer py-1 hover:opacity-80 transition-opacity text-left"
        >
          <div className="flex items-center gap-3">
            <Briefcase className="w-5 h-5 text-[#8C7A6B]" />
            <span className="font-bryndan text-3xl text-[#2B231D] tracking-tight">
              Professional Experience
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#73695F]">
            <span>{experienceOpen ? 'Collapse Timeline' : 'Expand Timeline'}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                experienceOpen ? 'rotate-180' : 'rotate-0'
              }`}
            />
          </div>
        </button>

        {/* Timeline body */}
        {experienceOpen && (
          <div className="pt-6 pb-2 space-y-8 animate-in slide-in-from-top-2 duration-300 pl-2 sm:pl-4">
            {portfolioData.cv.experience.map((exp, idx) => (
              <div
                key={idx}
                className="relative pl-6 border-l-2 border-[#D4CCC0] pb-6 last:pb-0"
              >
                <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-[#3D332A] border-2 border-[#F6F4F0]" />
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                  <h4 className="text-base font-bold text-[#271E18]">
                    {exp.role}
                  </h4>
                  <span className="text-xs font-mono text-[#8C8277]">
                    {exp.period}
                  </span>
                </div>
                <div className="text-xs font-medium text-[#7C7165] mb-2">
                  {exp.company} · {exp.location}
                </div>
                <p className="text-xs sm:text-sm text-[#5C5349] leading-relaxed max-w-2xl">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Direct Inquiries & Collaborations (Unboxed minimal row) */}
      <div className="border-t border-[#DFD7CC] pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <span className="font-['Montserrat',sans-serif] text-[11px] font-semibold uppercase tracking-wider text-[#8A8177] block">
            Direct Inquiries & Collaborations
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <a
            href={`mailto:${portfolioData.designer.email}`}
            onClick={() => audioFeedback.playTapClick()}
            className="flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-[#3A3129] hover:text-[#18130F] transition-colors"
          >
            <Mail className="w-4 h-4 text-[#8C7A6B]" />
            <span>Email Me</span>
          </a>

          <a
            href={`tel:${portfolioData.designer.phone}`}
            onClick={() => audioFeedback.playTapClick()}
            className="flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-[#3A3129] hover:text-[#18130F] transition-colors"
          >
            <Phone className="w-4 h-4 text-[#8C7A6B]" />
            <span>Phone</span>
          </a>

          <a
            href={portfolioData.designer.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => audioFeedback.playTapClick()}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#18130F] bg-[#E3DBD0] hover:bg-[#D7CEBF] rounded-full transition-all duration-200"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
