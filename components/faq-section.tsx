"use client";

import { useState } from "react";
import { ChevronDown, Plus } from "lucide-react";

const faqs = [
  {
    question: "What types of medical equipment does DocStock offer?",
    answer:
      "DocStock offers a comprehensive range of medical equipment including diagnostic tools, patient monitoring systems, surgical instruments, rehabilitation equipment, and consumables for healthcare professionals and institutions.",
  },
  {
    question: "How does DocStock ensure product quality?",
    answer:
      "All our medical equipment undergoes rigorous quality testing and comes from certified manufacturers. We maintain strict quality standards and provide warranties on all products to ensure reliability and safety.",
  },
  {
    question: "Do you offer bulk pricing for medical institutions?",
    answer:
      "Yes, we provide special bulk pricing and institutional discounts for hospitals, clinics, and medical facilities. Contact our sales team for customized pricing based on your requirements.",
  },
  {
    question: "What is your shipping and delivery policy?",
    answer:
      "We offer free shipping on orders over $200. Standard delivery takes 3-5 business days, with express options available. All medical equipment is carefully packaged to ensure safe delivery.",
  },
  {
    question: "Do you provide technical support and training?",
    answer:
      "Yes, we offer comprehensive technical support, installation assistance, and training programs for complex medical equipment. Our certified technicians are available to help with setup and maintenance.",
  },
  {
    question: "Can I return medical equipment if it doesn't meet my needs?",
    answer:
      "We have a 30-day return policy for unused medical equipment in original packaging. Due to health regulations, some consumables and opened sterile products cannot be returned.",
  },
  {
    question: "How do I contact DocStock for support?",
    answer:
      "You can reach us through our contact form, email at support@docstock.com.au, or call our customer service line. Our team is available Monday to Friday, 8 AM to 6 PM AEST.",
  },
  {
    question: "Do you offer maintenance and calibration services?",
    answer:
      "Yes, we provide ongoing maintenance, calibration, and repair services for medical equipment. Regular maintenance ensures optimal performance and compliance with medical standards.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Title and Illustration */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Frequently
                <br />
                asked{" "}
                <span className="text-orange-500 font-script">Questions</span>
              </h2>
            </div>

            {/* Illustration */}
            <div className="relative">
              <div className="max-w-xl mx-auto">
                <img
                  src="/images/faq.png"
                  alt="FAQ Illustration"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Right side - FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronDown className="w-5 h-5 text-gray-600 transform rotate-180 transition-transform" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
