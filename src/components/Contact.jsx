import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Contact Us</h2>
            <p className="mt-4 text-slate-700">Have a project in mind? Tell us about your goals and we’ll get back within 1-2 business days.</p>
            <div className="mt-6 space-y-3 text-slate-600">
              <div><span className="font-semibold text-slate-800">Email:</span> hello@globalitvision.com</div>
              <div><span className="font-semibold text-slate-800">Phone:</span> +91 00000 00000</div>
              <div className="flex gap-3 mt-2">
                <a href="#" className="text-slate-500 hover:text-blue-600">LinkedIn</a>
                <a href="#" className="text-slate-500 hover:text-blue-600">Twitter/X</a>
                <a href="#" className="text-slate-500 hover:text-blue-600">GitHub</a>
              </div>
            </div>
          </motion.div>
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-slate-200 p-6 bg-slate-50"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm text-slate-600">Name</label>
                <input name="name" value={form.name} onChange={onChange} required className="px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm text-slate-600">Email</label>
                <input type="email" name="email" value={form.email} onChange={onChange} required className="px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white" />
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-4">
              <label className="text-sm text-slate-600">Message</label>
              <textarea name="message" value={form.message} onChange={onChange} rows={5} required className="px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white" />
            </div>
            <button type="submit" className="mt-4 inline-flex items-center rounded-md bg-blue-600 text-white px-6 py-3 hover:bg-blue-700 transition-colors shadow">Send Message</button>
            {sent && <div className="mt-3 text-green-600">Thanks! Your message has been received.</div>}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
