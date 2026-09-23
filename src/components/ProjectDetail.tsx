import React from 'react';
import { PortfolioProject, ProjectSubSection } from '@/src/data/portfolioData';

interface ProjectDetailProps {
  project: PortfolioProject;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  // Helper to highlight specific bold words in bullet paragraphs
  const renderFormattedParagraph = (
    text?: string,
    boldWords: string[] = []
  ) => {
    if (!text) return null;
    if (!boldWords || boldWords.length === 0) return <span>{text}</span>;

    const escaped = boldWords.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const regex = new RegExp(`(${escaped.join('|')})`, 'gi');
    const parts = text.split(regex);

    return (
      <span>
        {parts.map((part, i) => {
          const isBold = boldWords.some(
            (b) => b.toLowerCase() === part.toLowerCase()
          );
          return isBold ? (
            <strong key={i} className="font-bold text-[#18130F]">
              {part}
            </strong>
          ) : (
            <span key={i}>{part}</span>
          );
        })}
      </span>
    );
  };

  return (
    <article id={project.id} className="pt-16 pb-36 sm:pb-48 scroll-mt-24">
      {/* Subtle divider line between projects with generous breathing room */}
      <div className="w-full max-w-4xl mx-auto mb-28 border-t border-[#DFD7CC]/60" />

      {/* ================= HERO SHOWCASE ================= */}
      <section className="mb-36 sm:mb-48">
        {/* Floating Hero Image (No box, no card border) */}
        <div className="w-full max-w-3xl mx-auto flex items-center justify-center mb-8">
          <img
            src={project.heroImage}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full max-h-[500px] object-contain mix-blend-multiply"
          />
        </div>

        {/* Caption bullet placed on the right as in screenshot */}
        <div className="max-w-2xl mx-auto text-left sm:text-right px-4">
          <p className="text-sm sm:text-base text-[#4E463E] font-medium inline-flex items-start gap-2">
            <span className="text-base text-[#251E18]">•</span>
            <span>{project.brief}</span>
          </p>
        </div>
      </section>

      {/* ================= SUB-SECTIONS ================= */}
      <div className="space-y-36 sm:space-y-48">
        {project.subSections.map((sub: ProjectSubSection) => {
          const subId = `${project.id}-${sub.id}`;

          // Layout 1: CONCEPT
          if (sub.id === 'concept') {
            return (
              <section
                key={sub.id}
                id={subId}
                className="scroll-mt-24 text-center max-w-3xl mx-auto px-4"
              >
                {/* Handwritten title */}
                <h3 className="font-bryndan text-5xl sm:text-6xl text-[#221B16] mb-8 tracking-tight">
                  {sub.title}
                </h3>

                {/* Centered bullet text with selective bolding */}
                <div className="text-left sm:text-justify max-w-2xl mx-auto mb-12 text-[#4D453E] text-base sm:text-lg leading-relaxed">
                  <p className="flex items-start gap-2.5">
                    <span className="text-lg text-[#251E18]">•</span>
                    <span>
                      {renderFormattedParagraph(
                        sub.description,
                        sub.boldKeywords
                      )}
                    </span>
                  </p>
                </div>

                {/* Floating concept image underneath (No enclosing box) */}
                {sub.image && (
                  <div className="max-w-md mx-auto flex items-center justify-center">
                    <img
                      src={sub.image}
                      alt={`${project.title} Concept`}
                      referrerPolicy="no-referrer"
                      className="w-full max-h-[320px] object-contain mix-blend-multiply"
                    />
                  </div>
                )}
              </section>
            );
          }

          // Layout 2: IDEATION
          if (sub.id === 'ideation') {
            return (
              <section
                key={sub.id}
                id={subId}
                className="scroll-mt-24 max-w-3xl mx-auto px-4 text-center"
              >
                <h3 className="font-bryndan text-5xl sm:text-6xl text-[#221B16] mb-8 tracking-tight">
                  {sub.title}
                </h3>
                <div className="text-left sm:text-justify max-w-2xl mx-auto text-[#4D453E] text-base sm:text-lg leading-relaxed">
                  <p className="flex items-start gap-2.5">
                    <span className="text-base text-[#251E18]">•</span>
                    <span>
                      {renderFormattedParagraph(
                        sub.description,
                        sub.boldKeywords
                      )}
                    </span>
                  </p>
                </div>
              </section>
            );
          }

          // Layout 3: DESIGN PROCESS (Sketching + Materials unboxed layout)
          if (sub.id === 'design-process') {
            const sketchImg = sub.sketchImage || project.heroImage;
            const matImg = sub.materialsImage || project.heroImage;

            return (
              <section
                key={sub.id}
                id={subId}
                className="scroll-mt-24 max-w-4xl mx-auto px-4"
              >
                {/* Centered section title */}
                <div className="text-center mb-16 sm:mb-20">
                  <h3 className="font-bryndan text-5xl sm:text-6xl text-[#221B16] mb-6 tracking-tight">
                    {sub.title}
                  </h3>

                  {/* Centered introductory paragraph */}
                  <div className="max-w-2xl mx-auto text-left sm:text-justify text-[#4D453E] text-base sm:text-lg leading-relaxed">
                    <p className="flex items-start gap-2.5">
                      <span className="text-base text-[#251E18]">•</span>
                      <span>
                        {renderFormattedParagraph(
                          sub.description,
                          sub.boldKeywords
                        )}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Sub-stage 1: Sketching (Text on Left, Floating Sketch on Right) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center mb-28 sm:mb-36">
                  <div>
                    <h4 className="font-bryndan text-4xl text-[#251E18] mb-4">
                      Sketching
                    </h4>
                    <p className="flex items-start gap-2.5 text-sm sm:text-base text-[#544B42] leading-relaxed">
                      <span className="text-base">•</span>
                      <span>
                        {renderFormattedParagraph(
                          sub.details?.text || sub.description,
                          sub.boldKeywords
                        )}
                      </span>
                    </p>
                  </div>

                  {/* Floating sketch drawing (No box, no white card, pure mix-blend-multiply) */}
                  <div className="flex items-center justify-center">
                    <img
                      src={sketchImg}
                      alt={`${project.title} Sketching`}
                      referrerPolicy="no-referrer"
                      className="max-h-[300px] w-full object-contain mix-blend-multiply"
                    />
                  </div>
                </div>

                {/* Sub-stage 2: Materials / Planning (Floating Diagram on Left, Text on Right) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
                  {/* Floating diagram / photo with callout badges */}
                  <div>
                    <div className="flex items-center justify-center mb-4">
                      <img
                        src={matImg}
                        alt={`${project.title} Materials Diagram`}
                        referrerPolicy="no-referrer"
                        className="w-full max-h-[280px] object-contain mix-blend-multiply"
                      />
                    </div>

                    {/* Annotation Callouts */}
                    {sub.details?.callouts && sub.details.callouts.length > 0 && (
                      <div className="space-y-1.5 pt-2 pl-2">
                        {sub.details.callouts.map((callout, i) => (
                          <div key={i} className="flex items-baseline gap-2 text-xs sm:text-sm">
                            <span className="font-bryndan font-bold text-base text-[#3E342B] shrink-0">
                              ↳ {callout.label}:
                            </span>
                            <span className="text-[#685E54] text-xs sm:text-[13px]">
                              {callout.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Materials Title & Text */}
                  <div>
                    <h4 className="font-bryndan text-4xl text-[#251E18] mb-4">
                      {sub.details?.subtitle || 'Materials'}
                    </h4>
                    <p className="flex items-start gap-2.5 text-sm sm:text-base text-[#544B42] leading-relaxed">
                      <span className="text-base">•</span>
                      <span>
                        {renderFormattedParagraph(
                          sub.details?.text || sub.description,
                          sub.boldKeywords
                        )}
                      </span>
                    </p>
                  </div>
                </div>
              </section>
            );
          }

          // Layout 4: FINAL PRODUCT
          return (
            <section
              key={sub.id}
              id={subId}
              className="scroll-mt-24 max-w-4xl mx-auto px-4 text-center"
            >
              <h3 className="font-bryndan text-5xl sm:text-6xl text-[#221B16] mb-8 tracking-tight">
                {sub.title}
              </h3>

              <div className="text-left sm:text-justify max-w-2xl mx-auto mb-12 text-[#4D453E] text-base sm:text-lg leading-relaxed">
                <p className="flex items-start gap-2.5">
                  <span className="text-base text-[#251E18]">•</span>
                  <span>
                    {renderFormattedParagraph(
                      sub.description,
                      sub.boldKeywords
                    )}
                  </span>
                </p>
              </div>

              {/* Large Floating Final Product Photo (No box, no card border) */}
              {sub.image && (
                <div className="w-full max-w-3xl mx-auto flex items-center justify-center mb-12">
                  <img
                    src={sub.image}
                    alt={`${project.title} Final`}
                    referrerPolicy="no-referrer"
                    className="w-full max-h-[480px] object-contain mix-blend-multiply"
                  />
                </div>
              )}

              {/* Specifications Summary (Clean, minimal unboxed list) */}
              {sub.specifications && sub.specifications.length > 0 && (
                <div className="max-w-2xl mx-auto pt-6 border-t border-[#DFD7CC]/60 text-left">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8C8379] block mb-4 text-center">
                    SPECIFICATIONS & MATERIALS
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm text-[#4E463E]">
                    {sub.specifications.map((spec, i) => (
                      <div key={i} className="flex items-baseline gap-2">
                        <span className="text-[#251E18] font-bold">• {spec.label}:</span>
                        <span className="text-[#6E645A]">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>
          );
        })}
      </div>
    </article>
  );
};
