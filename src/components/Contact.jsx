import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, Linkedin, Facebook, Youtube, Globe } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'Fire & Industrial Safety',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormState({ name: '', email: '', phone: '', course: 'Fire & Industrial Safety', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-[10%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-secondary/5 glow-blob" />
      <div className="absolute bottom-[10%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-accent/5 glow-blob" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-2 block">
            Get in Touch
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-primary tracking-tight mb-4">
            Connect With Admissions Panel
          </h2>
          <p className="text-primary/70 text-sm md:text-base font-medium">
            Fill out the consultation sheet or reach out to our hotlines directly for immediate enrollment guides.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Form (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl p-8 md:p-10 bg-white border border-navy-100/70 shadow-[0_4px_30px_rgba(0,0,0,0.015)] text-left flex flex-col justify-center">
            <h3 className="font-display font-bold text-xl text-primary mb-6 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-secondary" />
              <span>Request Counseling Call</span>
            </h3>

            {isSubmitted ? (
              <div className="py-16 text-center flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-200">
                <div className="w-16 h-16 bg-emerald-500/10 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="font-display font-extrabold text-xl text-primary mb-2">Request Submitted!</h4>
                <p className="text-sm text-primary/60 font-medium max-w-xs">
                  An academic safety counselor will call you within the next 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-primary/80 mb-1.5">Full Name</label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="e.g. Raj Patel"
                      className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:outline-none focus:border-secondary transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-primary/80 mb-1.5">Contact Number</label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:outline-none focus:border-secondary transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-primary/80 mb-1.5">Email Address</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:outline-none focus:border-secondary transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-primary/80 mb-1.5">Preferred Program</label>
                    <select
                      name="course"
                      value={formState.course}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:outline-none focus:border-secondary transition-colors text-sm bg-white"
                    >
                      <option>Fire & Industrial Safety</option>
                      <option>Workplace Occupational Health</option>
                      <option>Environmental Compliance</option>
                      <option>Short Term Certifications</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-primary/80 mb-1.5">Extra Queries (Optional)</label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your educational background or placement goals..."
                    className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:outline-none focus:border-secondary transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-white font-bold py-4 rounded-xl transition-all shadow-md shadow-primary/10"
                >
                  <span>Submit Counseling Sheet</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Info Details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8 text-left">
            
            {/* Quick Contacts */}
            <div className="rounded-3xl p-8 bg-navy-50 border border-navy-100 flex flex-col gap-6">
              <h3 className="font-display font-bold text-lg text-primary">Office Directory</h3>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-navy-200 flex items-center justify-center text-secondary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-navy-400">Headquarters</h4>
                  <p className="text-sm font-semibold text-primary leading-snug mt-1">
                    ICVRT Education Tower, Suite 402, Technical Zone, Metro Terminal, Mumbai, India
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-navy-200 flex items-center justify-center text-secondary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-navy-400">Admission Hotline</h4>
                  <p className="text-sm font-semibold text-primary mt-1">+91 (22) 2894-3990 / 2894-3991</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-navy-200 flex items-center justify-center text-secondary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-navy-400">Email Admissions</h4>
                  <p className="text-sm font-semibold text-primary mt-1">admissions@icvrt.edu.in</p>
                </div>
              </div>
            </div>

            {/* Stylized Minimal Vector Map Representation */}
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-primary border border-navy-800 shadow-[0_12px_24px_rgba(0,0,0,0.04)] flex items-center justify-center p-4">
              {/* Clean abstract globe vector layout */}
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff_0.5px,transparent_0.5px)] bg-[size:12px_12px] opacity-15" />
              
              {/* Abstract glowing map shapes or line connections */}
              <div className="w-24 h-24 rounded-full bg-secondary/20 absolute glow-blob animate-pulse-subtle" />
              
              <div className="relative z-10 text-center flex flex-col items-center">
                <Globe className="w-10 h-10 text-secondary mb-3 animate-spin-slow" />
                <h4 className="text-white font-display font-bold text-sm">International Admissions office</h4>
                <p className="text-[10px] text-gray-300 mt-1 max-w-[200px] leading-relaxed">
                  Coordination centres present in India, UAE, and Qatar.
                </p>
              </div>

              <div className="absolute bottom-4 right-4 glass-panel-dark rounded-xl px-3 py-1.5 text-[9px] font-bold text-white border border-white/10 uppercase tracking-widest">
                Center Coordinates
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
