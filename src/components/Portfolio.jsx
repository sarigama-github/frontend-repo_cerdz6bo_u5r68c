import { motion } from 'framer-motion';
import ImageWithFallback from './ImageWithFallback';

const works = [
  { title: 'E‑Commerce Platform', img: '/images/work1.jpg' },
  { title: 'Fintech Dashboard', img: '/images/work2.jpg' },
  { title: 'Healthcare Portal', img: '/images/work3.jpg' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Portfolio</h2>
          <p className="mt-3 text-slate-600">A selection of our recent projects across industries.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((w, idx) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-2xl overflow-hidden border border-slate-200 bg-white hover:shadow-lg transition-shadow"
            >
              <div className="h-56 w-full overflow-hidden">
                <ImageWithFallback src={w.img} alt={w.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-slate-900 text-lg">{w.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
