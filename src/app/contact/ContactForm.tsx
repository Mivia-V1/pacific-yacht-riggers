"use client";

import { useState, FormEvent } from "react";

interface ContactFormProps {
  formspreeUrl: string;
}

export default function ContactForm({ formspreeUrl }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(formspreeUrl, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-teal-50 border border-teal-200 rounded-xl p-8 text-center">
        <svg
          className="w-12 h-12 text-teal-600 mx-auto mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <h3 className="text-xl font-bold text-navy-900 mb-2">
          Message Sent!
        </h3>
        <p className="text-navy-600">
          Thanks for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-teal-600 hover:text-teal-700 font-medium"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-navy-700 mb-2"
          >
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-colors text-navy-900"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-navy-700 mb-2"
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-colors text-navy-900"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="boat_name"
            className="block text-sm font-medium text-navy-700 mb-2"
          >
            Boat Name
          </label>
          <input
            type="text"
            id="boat_name"
            name="boat_name"
            className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-colors text-navy-900"
            placeholder="SV Dreamtime"
          />
        </div>
        <div>
          <label
            htmlFor="boat_length"
            className="block text-sm font-medium text-navy-700 mb-2"
          >
            Boat Length (ft)
          </label>
          <input
            type="text"
            id="boat_length"
            name="boat_length"
            className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-colors text-navy-900"
            placeholder="42"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="location"
          className="block text-sm font-medium text-navy-700 mb-2"
        >
          Current / Planned Location
        </label>
        <select
          id="location"
          name="location"
          className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-colors text-navy-900 bg-white"
        >
          <option value="">Select location...</option>
          <option value="fiji-vuda">Fiji — Vuda Point Marina</option>
          <option value="fiji-denarau">Fiji — Port Denarau</option>
          <option value="fiji-other">Fiji — Other</option>
          <option value="tonga-vavau">Tonga — Vava&apos;u</option>
          <option value="tonga-nukualofa">Tonga — Nuku&apos;alofa</option>
          <option value="vanuatu-vila">Vanuatu — Port Vila</option>
          <option value="other">Other / In Transit</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="service"
          className="block text-sm font-medium text-navy-700 mb-2"
        >
          Service Required
        </label>
        <select
          id="service"
          name="service"
          className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-colors text-navy-900 bg-white"
        >
          <option value="">Select service...</option>
          <option value="standing-rigging">Standing Rigging</option>
          <option value="running-rigging">Running Rigging</option>
          <option value="mast-inspection">Mast & Spar Inspection</option>
          <option value="furler-servicing">Furler Servicing</option>
          <option value="custom-fabrication">Custom Fabrication</option>
          <option value="pre-purchase-survey">Pre-Purchase Rig Survey</option>
          <option value="general">General Enquiry</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-navy-700 mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-colors text-navy-900 resize-y"
          placeholder="Tell us about your rigging needs — boat type, rig type, any specific issues or concerns..."
        />
      </div>

      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
          Something went wrong. Please try again or contact us directly via
          WhatsApp or email.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full sm:w-auto px-8 py-4 bg-teal-600 hover:bg-teal-500 disabled:bg-navy-300 text-white font-semibold rounded-lg transition-colors text-lg"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
