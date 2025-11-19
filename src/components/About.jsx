import { motion } from 'framer-motion';
import ImageWithFallback from './ImageWithFallback';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">About Global IT Vision</h2>
            <p className="mt-4 text-slate-700">
              We are a technology partner dedicated to turning ideas into secure, scalable, human-centered products. Our mission is to empower organizations with dependable digital solutions. Our vision is a world where technology is reliable, intuitive, and accessible. We value integrity, innovation, and impact.
            </p>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {[
                { k: 'Mission', v: 'Deliver value through modern, resilient technology.' },
                { k: 'Vision', v: 'Enable a connected, intelligent future for everyone.' },
                { k: 'Values', v: 'Integrity • Innovation • Impact' },
              ].map((item) => (
                <div key={item.k} className="rounded-xl border border-slate-200 p-4 bg-slate-50">
                  <div className="text-sm text-slate-500">{item.k}</div>
                  <div className="font-semibold text-slate-800 mt-1">{item.v}</div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl overflow-hidden border border-slate-200"
          >
            <ImageWithFallback src="/images/banner-placeholder.jpg" alt="About banner" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
