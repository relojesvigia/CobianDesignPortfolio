import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '@/src/data/portfolioData';
import { audioFeedback } from '@/src/utils/audioFeedback';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    audioFeedback.playTapClick();
    setSubmitted(true);
  };

  return (
    <footer id="contact-section" className="pt-36 sm:pt-48 pb-40 border-t border-[#DFD7CC]/70 mt-36 scroll-mt-24">
      <div id="contact-details" className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="text-center mb-20">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8C8276] block mb-3">
            Get In Touch
          </span>
          <h2 className="font-bryndan text-6xl sm:text-7xl text-[#221B16] tracking-tight mb-5">
            Let&apos;s collaborate
          </h2>
          <p className="text-base text-[#6E645A] max-w-lg mx-auto leading-relaxed">
            Open for industrial design commissions, CAD modeling, CMF development, and creative videography projects worldwide.
          </p>
        </div>

        {/* Direct Contact Links (Unboxed minimal row) */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 mb-20 text-center">
          <a
            href={`mailto:${portfolioData.designer.email}`}
            onClick={() => audioFeedback.playTapClick()}
            className="group flex flex-col items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-12 h-12 rounded-full bg-[#EAE4DA] flex items-center justify-center text-[#3D332A] mb-1">
              <Mail className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-[#8A8177]">
              Email
            </span>
            <span className="text-sm font-medium text-[#261E18]">
              {portfolioData.designer.email}
            </span>
          </a>

          <a
            href={`tel:${portfolioData.designer.phone}`}
            onClick={() => audioFeedback.playTapClick()}
            className="group flex flex-col items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-12 h-12 rounded-full bg-[#EAE4DA] flex items-center justify-center text-[#3D332A] mb-1">
              <Phone className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-[#8A8177]">
              Phone
            </span>
            <span className="text-sm font-medium text-[#261E18]">
              {portfolioData.designer.phone}
            </span>
          </a>

          <a
            href={portfolioData.designer.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => audioFeedback.playTapClick()}
            className="group flex flex-col items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-12 h-12 rounded-full bg-[#EAE4DA] flex items-center justify-center text-[#25D366] mb-1">
              <MessageCircle className="w-5 h-5 fill-current" />
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-[#8A8177]">
              WhatsApp
            </span>
            <span className="text-sm font-bold text-[#1E1915]">
              Chat on WhatsApp →
            </span>
          </a>
        </div>

        {/* Minimal Unboxed Message Form */}
        <div className="max-w-xl mx-auto pt-8 border-t border-[#DFD7CC]/60">
          {submitted ? (
            <div className="text-center py-12 animate-in fade-in duration-300">
              <CheckCircle2 className="w-12 h-12 text-[#3D332A] mx-auto mb-3" />
              <h3 className="font-bryndan text-3xl text-[#221B16] mb-2">
                Thank you for reaching out
              </h3>
              <p className="text-sm text-[#73695F] mb-6">
                Your message has been received. I will review your project requirements and respond promptly.
              </p>
              <button
                onClick={() => {
                  audioFeedback.playTapClick();
                  setSubmitted(false);
                  setFormData({ name: '', email: '', message: '' });
                }}
                className="text-xs font-semibold text-[#3D332A] underline underline-offset-4 hover:text-black cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-[11px] font-medium uppercase tracking-wider text-[#736A61] mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Elena Rostova"
                    className="w-full bg-transparent border-b border-[#D0C8BD] focus:border-[#221B16] py-2 text-sm text-[#221B16] placeholder-[#A49B90] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-[11px] font-medium uppercase tracking-wider text-[#736A61] mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="elena@studio.design"
                    className="w-full bg-transparent border-b border-[#D0C8BD] focus:border-[#221B16] py-2 text-sm text-[#221B16] placeholder-[#A49B90] outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-[11px] font-medium uppercase tracking-wider text-[#736A61] mb-2"
                >
                  Project Brief or Inquiry
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell me about your product design scope, CAD needs, timeline, or videography concept..."
                  className="w-full bg-transparent border-b border-[#D0C8BD] focus:border-[#221B16] py-2 text-sm text-[#221B16] placeholder-[#A49B90] outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#382E26] hover:bg-[#241D17] text-[#FAF8F5] text-xs font-semibold tracking-wider uppercase rounded-full transition-all duration-200 cursor-pointer shadow-sm hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Send Message</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Minimal Copyright */}
        <div className="text-center pt-24 text-xs text-[#8A8177]">
          © {new Date().getFullYear()} {portfolioData.designer.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
