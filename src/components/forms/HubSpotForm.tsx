'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function HubSpotForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
    const formGuid = process.env.NEXT_PUBLIC_HUBSPOT_FORM_GUID;
    
    if (!portalId || !formGuid) {
      console.warn('HubSpot form credentials missing. Form submission bypassed for dev.');
      setTimeout(() => setStatus('success'), 1000);
      return;
    }

    const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;

    const requestBody = {
      fields: [
        { name: 'firstname', value: data.name },
        { name: 'company', value: data.business },
        { name: 'email', value: data.email },
        { name: 'phone', value: data.phone },
        { name: 'website', value: data.website },
        { name: 'service_interested_in', value: data.service },
        { name: 'message', value: data.message },
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title,
      }
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="p-8 bg-zinc-900/50 text-white border border-green-500/30 rounded-xl">
        <h3 className="font-bold text-2xl text-green-400 mb-2">Thank you for your interest!</h3>
        <p className="text-zinc-300">We've received your information and will be in touch shortly for your free growth audit.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" name="name" required placeholder="Name" className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-white" />
        <input type="text" name="business" required placeholder="Business Name" className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-white" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="email" name="email" required placeholder="Email Address" className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-white" />
        <input type="tel" name="phone" required placeholder="Phone Number" className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-white" />
      </div>
      
      <input type="url" name="website" placeholder="Website URL (Optional)" className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-white" />
      
      <select name="service" required className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-white appearance-none">
        <option value="">Select Service of Interest</option>
        <option value="Search Visibility">Search Visibility (SEO, Local SEO, etc.)</option>
        <option value="Web & Conversion">Web & Conversion</option>
        <option value="Customer Acquisition">Customer Acquisition (Ads, Leads)</option>
      </select>
      
      <textarea name="message" required rows={4} placeholder="How can we help you grow?" className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-white resize-none"></textarea>
      
      <Button type="submit" disabled={status === 'loading'} className="w-full py-6 text-lg font-bold">
        {status === 'loading' ? 'Submitting...' : 'Get Your Free Growth Audit'}
      </Button>
      
      {status === 'error' && (
        <p className="text-red-500 text-sm mt-2 text-center">There was an error submitting your request. Please try again.</p>
      )}
    </form>
  );
}
