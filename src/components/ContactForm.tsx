"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ContactForm = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useLanguage();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    console.log('Form submission started');
    console.log('Form data:', Object.fromEntries(formData));

    try {
      const response = await fetch('https://formspree.io/f/mjkoagea', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);

      if (response.ok) {
        console.log('Form submitted successfully');
        setIsSubmitted(true);
      } else {
        // Try with JSON format as fallback
        console.log('FormData failed, trying JSON format...');
        
        const jsonData = {
          fullName: formData.get('fullName'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          projectDescription: formData.get('projectDescription'),
          _replyto: formData.get('email'),
          _subject: 'New Consultation Request from Permaguanacaste Website'
        };

        const jsonResponse = await fetch('https://formspree.io/f/mjkoagea', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(jsonData)
        });

        if (jsonResponse.ok) {
          console.log('JSON submission successful');
          setIsSubmitted(true);
        } else {
          const errorText = await jsonResponse.text();
          console.error('Form submission error:', errorText);
          throw new Error(`Form submission failed with status: ${jsonResponse.status}`);
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again or contact us directly via WhatsApp at +506 8302 1304.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={containerRef} className="bg-white py-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Contact Form Section */}
        <motion.div 
          className="pt-16 border-t border-stone-200"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-luxury font-black text-stone-800 mb-4">
              {t.contact.title}
            </h2>
            <p className="text-xl font-luxury italic text-stone-600 max-w-3xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg border border-stone-100 p-8"
            >
              {!isSubmitted ? (
                <>
                  <h3 className="text-2xl font-luxury font-semibold text-stone-800 mb-6 flex items-center">
                    <svg className="w-6 h-6 mr-3 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Book Your Free Consultation
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-luxury font-medium text-stone-700 mb-2">
                        {t.contact.form.name} *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 font-luxury"
                        placeholder={t.contact.form.name}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-luxury font-medium text-stone-700 mb-2">
                        {t.contact.form.email} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 font-luxury"
                        placeholder={t.contact.form.email}
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-luxury font-medium text-stone-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 font-luxury"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    {/* Preferred Contact Time */}
                    <div>
                      <label htmlFor="contactTime" className="block text-sm font-luxury font-medium text-stone-700 mb-2">
                        Let us know the best time to contact you
                      </label>
                      <input
                        type="text"
                        id="contactTime"
                        name="contactTime"
                        className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 font-luxury"
                        placeholder="e.g., Weekday mornings, Tuesday 2-4pm, Anytime this week..."
                      />
                    </div>

                    {/* Project Description */}
                    <div>
                      <label htmlFor="projectDescription" className="block text-sm font-luxury font-medium text-stone-700 mb-2">
                        Tell us about your land and project *
                      </label>
                      <textarea
                        id="projectDescription"
                        name="projectDescription"
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 font-luxury resize-none"
                        placeholder="Describe your land, vision, and what you're hoping to achieve. Include details about location, size, current state, and your goals..."
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 disabled:from-stone-400 disabled:to-stone-500 text-white font-luxury font-medium tracking-wide py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:hover:transform-none disabled:hover:shadow-lg flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                          <span>Send My Request</span>
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                /* Success Message */
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-luxury font-semibold text-stone-800 mb-4">
                    Thank You!
                  </h3>
                  <p className="text-lg font-luxury text-stone-600 mb-6 leading-relaxed">
                    Your consultation request has been successfully submitted. We'll review your project details and get back to you within 24 hours.
                  </p>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-emerald-700 font-luxury font-medium hover:text-emerald-800 transition-colors duration-200"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              )}
            </motion.div>

            {/* Direct Contact Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* WhatsApp Contact */}
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-100">
                <div className="text-center">
                  <h3 className="text-2xl font-luxury font-semibold text-stone-800 mb-6 flex items-center justify-center">
                    <svg className="w-8 h-8 mr-3 text-emerald-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
                    </svg>
                    Prefer to Talk Directly?
                  </h3>

                  <div className="mb-8">
                    <p className="text-xl font-luxury text-stone-600 mb-6 leading-relaxed">
                      Get instant answers and personalized guidance
                    </p>
                    
                    <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
                      <p className="text-lg font-luxury font-medium text-stone-700 mb-2">WhatsApp us now:</p>
                      <p className="text-3xl font-luxury font-bold text-emerald-700">+506 8302 1304</p>
                    </div>
                  </div>
                  
                  <a
                    href="https://wa.me/50683021304?text=Hi%20Permaguanacaste%2C%20I%27m%20interested%20in%20learning%20more%20about%20your%20permaculture%20design%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-3 bg-[#25D366] hover:bg-[#20BA59] text-white font-luxury font-bold text-lg tracking-wide py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full"
                  >
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
                    </svg>
                    <span>Start a Chat</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Additional Contact Info */}
              <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200">
                <h4 className="text-xl font-luxury font-semibold text-stone-800 mb-4">
                  What to Expect
                </h4>
                <ul className="space-y-3 text-stone-600 font-luxury">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Free 30-minute consultation call</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Discussion of your vision and goals</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Assessment of your land and needs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Personalized service recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Next steps and timeline discussion</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-green-200/10 rounded-full blur-xl"
          style={{ y }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-green-300/10 rounded-full blur-xl"
          style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
        />
      </div>
    </section>
  );
};

export default ContactForm; 