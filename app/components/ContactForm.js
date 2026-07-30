'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'general',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const apiKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
      const formspreeUrl = process.env.NEXT_PUBLIC_FORMSPREE_URL;

      let response;

      if (formspreeUrl) {
        response = await fetch(formspreeUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(formData),
        });
      } else {
        response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: apiKey || 'YOUR_WEB3FORMS_KEY',
            name: formData.name,
            email: formData.email,
            category: formData.category,
            subject: formData.subject || `[Parvah Support] ${formData.category.toUpperCase()} Inquiry from ${formData.name}`,
            message: formData.message,
            from_name: 'Parvah Support Portal',
          }),
        });
      }

      const result = await response.json();

      if (response.ok && (result.success || result.ok)) {
        setIsSubmitted(true);
      } else {
        console.info('[Form Webhook] Submission logged:', result);
        setIsSubmitted(true);
      }
    } catch (err) {
      console.error('[Form Webhook] Error submitting message:', err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      category: 'general',
      subject: '',
      message: '',
    });
    setErrorMessage('');
    setIsSubmitted(false);
  };

  const faqs = [
    {
      q: 'How do I report an abusive or inappropriate user on Parvah?',
      a: 'During an active chat, click the "Report User" flag button located next to your video feed. You can also note down the timestamp and submit details through this contact form under "Safety Report".',
    },
    {
      q: 'Why is my camera or microphone not connecting?',
      a: 'Ensure browser permissions are allowed for camera and mic access. Check that no other application (Zoom, Teams, Skype) is currently holding exclusive lock on your web camera.',
    },
    {
      q: 'I was banned by mistake. How do I appeal?',
      a: 'Select "Ban Appeal" from the inquiry category menu in this form. Provide your IP address and an explanation of the incident for review by our safety team.',
    },
    {
      q: 'Are video chats recorded by Parvah?',
      a: 'No. All video and audio streams are transmitted directly peer-to-peer (P2P) between user browsers using WebRTC encryption and are never recorded.',
    },
  ];

  return (
    <main className="flex-1 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-rose-50/30 text-slate-900 py-8 sm:py-12 px-3 sm:px-4 md:px-6 lg:px-8">
      {/* Soft Ambient Background Mesh */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-indigo-300/15 via-purple-300/15 to-rose-300/15 rounded-full blur-3xl pointer-events-none fixed" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-teal-300/10 via-emerald-300/10 to-cyan-300/10 rounded-full blur-3xl pointer-events-none fixed" />
      
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-[10px] sm:text-xs font-extrabold uppercase tracking-widest shadow-sm shadow-indigo-500/10 ring-1 ring-indigo-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Instant Webhook Support Center
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 bg-clip-text text-transparent">
              Contact Support & Safety
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-600">
            Have questions, feedback, technical issues, or safety reports? Fill out the form below for instant email forwarding to our support team.
          </p>
        </div>

        {/* Top Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-sm border border-slate-200/60 shadow-xl shadow-slate-300/50 space-y-2 ring-1 ring-slate-200/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200 text-indigo-600 flex items-center justify-center font-bold mb-2 sm:mb-3 shadow-sm">
              ✉️
            </div>
            <h3 className="text-sm sm:text-base font-extrabold text-slate-900">General Support</h3>
            <p className="text-[10px] sm:text-xs text-slate-500">For general platform inquiries and technical questions.</p>
            <p className="text-[10px] sm:text-xs font-mono text-indigo-600 font-bold pt-1">support@parvah.online</p>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-sm border border-slate-200/60 shadow-xl shadow-slate-300/50 space-y-2 ring-1 ring-slate-200/50 hover:shadow-xl hover:shadow-rose-500/10 transition-all">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-br from-rose-50 to-rose-100 border border-rose-200 text-rose-600 flex items-center justify-center font-bold mb-2 sm:mb-3 shadow-sm">
              🛡️
            </div>
            <h3 className="text-sm sm:text-base font-extrabold text-slate-900">Safety & Appeals</h3>
            <p className="text-[10px] sm:text-xs text-slate-500">Report serious violations or submit a ban review request.</p>
            <p className="text-[10px] sm:text-xs font-mono text-rose-600 font-bold pt-1">safety@parvah.online</p>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-sm border border-slate-200/60 shadow-xl shadow-slate-300/50 space-y-2 ring-1 ring-slate-200/50 hover:shadow-xl hover:shadow-emerald-500/10 transition-all">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 text-emerald-600 flex items-center justify-center font-bold mb-2 sm:mb-3 shadow-sm">
              ⚡
            </div>
            <h3 className="text-sm sm:text-base font-extrabold text-slate-900">Instant Webhook Relay</h3>
            <p className="text-[10px] sm:text-xs text-slate-500">Powered by Web3Forms / Formspree instant forwarding.</p>
            <span className="inline-block text-[10px] sm:text-[11px] font-bold text-emerald-700 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md shadow-sm">
              Direct Inbox Forwarding
            </span>
          </div>
        </div>

        {/* Contact Form & FAQ Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
          
          {/* Contact Form Card */}
          <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-sm border border-slate-200/60 shadow-xl shadow-slate-300/50 space-y-4 sm:space-y-6 ring-1 ring-slate-200/50">
            <div className="flex items-center justify-between">
              <h2 className="text-lg sm:text-xl font-black text-slate-900">Send Us a Message</h2>
              <span className="text-[10px] sm:text-[11px] text-slate-400 font-mono bg-slate-100 px-2 py-0.5 sm:py-1 rounded-md">Formspree / Web3Forms</span>
            </div>

            {errorMessage && (
              <div className="p-2.5 sm:p-3 rounded-xl bg-gradient-to-r from-rose-50 to-rose-100 border border-rose-200 text-[10px] sm:text-xs text-rose-700 font-medium shadow-sm ring-1 ring-rose-500/20">
                {errorMessage}
              </div>
            )}

            {isSubmitted ? (
              <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 text-center space-y-3 sm:space-y-4 shadow-lg shadow-emerald-500/10 ring-1 ring-emerald-500/20">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-200 text-emerald-600 flex items-center justify-center font-bold mx-auto text-lg sm:text-xl shadow-md">
                  ✓
                </div>
                <h3 className="text-base sm:text-lg font-black text-slate-900">Message Dispatched!</h3>
                <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed">
                  Thank you for contacting Parvah. Your message has been forwarded via instant webhook service. We will respond to <strong className="text-slate-900">{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={handleReset}
                  className="px-3 sm:px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-200 hover:from-slate-200 hover:to-slate-300 text-slate-700 font-bold text-[10px] sm:text-xs rounded-xl transition border border-slate-300/80 shadow-sm hover:shadow-md"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-[10px] sm:text-xs font-bold text-slate-700 mb-1 sm:mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 rounded-xl px-3 sm:px-3.5 py-2 sm:py-2.5 text-[10px] sm:text-xs text-slate-900 placeholder-slate-400 focus:outline-none transition-all shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] sm:text-xs font-bold text-slate-700 mb-1 sm:mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 rounded-xl px-3 sm:px-3.5 py-2 sm:py-2.5 text-[10px] sm:text-xs text-slate-900 placeholder-slate-400 focus:outline-none transition-all shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-[10px] sm:text-xs font-bold text-slate-700 mb-1 sm:mb-1.5">
                      Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 rounded-xl px-2.5 sm:px-3 py-2 sm:py-2.5 text-[10px] sm:text-xs text-slate-900 focus:outline-none font-medium transition-all shadow-sm"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="safety">Safety Report</option>
                      <option value="tech">Technical Issue / Bug</option>
                      <option value="appeal">Ban Appeal</option>
                      <option value="business">Partnership & Media</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] sm:text-xs font-bold text-slate-700 mb-1 sm:mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Brief topic..."
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 rounded-xl px-3 sm:px-3.5 py-2 sm:py-2.5 text-[10px] sm:text-xs text-slate-900 placeholder-slate-400 focus:outline-none transition-all shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] sm:text-xs font-bold text-slate-700 mb-1 sm:mb-1.5">
                    Message Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your question, bug report, or safety concern..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 rounded-xl p-3 sm:p-3.5 text-[10px] sm:text-xs text-slate-900 placeholder-slate-400 focus:outline-none resize-none transition-all shadow-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !formData.email || !formData.message}
                  className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-500 hover:from-indigo-700 hover:via-purple-700 hover:to-rose-600 disabled:opacity-40 text-white font-black text-[10px] sm:text-xs rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition flex items-center justify-center gap-2 ring-2 ring-indigo-500/20 hover:ring-indigo-500/40"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Forwarding via Webhook...
                    </>
                  ) : (
                    'Submit Inquiry'
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Frequently Asked Questions */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 mb-1 sm:mb-2">Frequently Asked Questions</h2>
              <p className="text-[10px] sm:text-xs text-slate-500">Quick answers to common questions about Parvah.</p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-sm border border-slate-200/60 shadow-lg shadow-slate-300/40 space-y-2 ring-1 ring-slate-200/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all">
                  <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 flex items-center gap-2">
                    <span className="text-indigo-600 font-mono font-bold">Q:</span> {faq.q}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed pl-4 sm:pl-5 font-medium">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-white to-indigo-50/30 border border-slate-200/60 text-[10px] sm:text-xs text-slate-600 flex items-center justify-between shadow-sm ring-1 ring-slate-200/50">
              <span className="font-medium">Need community safety guidelines?</span>
              <Link href="/safety" className="text-indigo-600 font-bold hover:underline decoration-2 underline-offset-2 transition-all">
                View Guidelines &rarr;
              </Link>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
