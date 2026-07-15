import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: 'Are ICVRT courses valid for government jobs and international visa processes?',
      a: 'Yes. All diplomas and certifications issued by ICVRT are compliant with vocational training frameworks and international safety standards. They are regularly accepted for consular attestations, ministry audits, and embassy validations for overseas employment.',
    },
    {
      q: 'What are the eligibility criteria for the PG Diploma programs?',
      a: 'Applicants must hold a Bachelor of Science (B.Sc.), Engineering degree, or a standard diploma in a technical discipline. Candidates with relevant industrial experience but alternative academic profiles may apply under the direct panel review program.',
    },
    {
      q: 'How are practical training sessions organized?',
      a: 'Classroom theory is supplemented by intensive laboratory work. This includes hands-on drills at our authorized fire safety training yard, breathing apparatus operations, toxic gas isolation protocols, and simulator training.',
    },
    {
      q: 'Does ICVRT guarantee corporate placements after graduation?',
      a: 'We provide 100% placement assistance. Our dedicated corporate team channels student profiles directly to domestic and international energy, construction, and manufacturing partners, scheduling campus interviews and processing visa letters.',
    },
    {
      q: 'Can I pay the program tuition fees in installment plans?',
      a: 'Yes. We support flexible installment payment structures for our long-term PG and Advanced Diploma programs. Details about active scholarship tiers and fee schedules can be requested directly from your admission counselor.',
    },
  ];

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="py-24 bg-navy-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#0F5FFF_0.5px,transparent_0.5px)] bg-[size:24px_24px] opacity-5" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-2 block">
            Common Inquiries
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-primary tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-primary/70 text-sm md:text-base font-medium">
            Find prompt answers about program verification, course modes, fee details, and recruitment support.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="group rounded-2xl bg-white border border-navy-100/70 shadow-[0_2px_12px_rgba(0,0,0,0.01)] hover:border-secondary/20 transition-all duration-300 overflow-hidden"
              >
                {/* FAQ Question header */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <div className="flex gap-4 pr-4">
                    <HelpCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="font-display font-bold text-sm md:text-base text-primary group-hover:text-secondary transition-colors duration-300">
                      {faq.q}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    isOpen ? 'bg-primary text-white' : 'bg-navy-50 text-primary group-hover:bg-navy-100'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* FAQ Answer text panel with CSS transition */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[300px] opacity-100 border-t border-navy-50' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pl-16 text-left text-xs md:text-sm text-primary/70 font-medium leading-relaxed bg-navy-50/20">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
