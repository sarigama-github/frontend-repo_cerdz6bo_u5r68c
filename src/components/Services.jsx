import { motion } from 'framer-motion';
import ImageWithFallback from './ImageWithFallback';

const services = [
  { title: 'Web Development', desc: 'Modern, responsive websites and web apps built with performance and accessibility in mind.', img: '/images/service1.jpg' },
  { title: 'Mobile Apps', desc: 'Cross-platform mobile applications delivering seamless experiences.', img: '/images/service2.jpg' },
  { title: 'Cloud Solutions', desc: 'Scalable cloud architecture, DevOps, and cost optimization.', img: '/images/service3.jpg' },
  { title: 'Cybersecurity', desc: 'Security assessments, SOC hardening, compliance and threat monitoring.', img: '/images/work1.jpg' },
  { title: 'AI Solutions', desc: 'Intelligent automation, data pipelines, and custom AI models.', img: '/images/work2.jpg' },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Our Services</h2>
          <p className="mt-3 text-slate-600">We provide end-to-end technology solutions to help you launch, scale, and secure your business.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-2xl overflow-hidden border border-slate-200 bg-white hover:shadow-lg transition-shadow"
            >
              <div className="h-44 w-full overflow-hidden">
                <ImageWithFallback src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-slate-900 text-lg">{s.title}</h3>
                <p className="mt-2 text-slate-600 text-sm">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
