import { motion } from 'framer-motion';

const team = [
  { name: 'Aarav Sharma', role: 'CEO & Founder', img: '/images/team1.jpg' },
  { name: 'Priya Patel', role: 'Head of Engineering', img: '/images/team2.jpg' },
  { name: 'Rahul Verma', role: 'Lead Cloud Architect', img: '/images/team3.jpg' },
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Our Team</h2>
          <p className="mt-3 text-slate-600">Experienced leaders and builders with a passion for quality.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((m, idx) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-2xl overflow-hidden border border-slate-200 bg-white text-center p-6 hover:shadow-lg transition-shadow"
            >
              <div className="h-40 w-40 mx-auto rounded-full overflow-hidden">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
              </div>
              <div className="mt-4">
                <div className="font-semibold text-slate-900">{m.name}</div>
                <div className="text-sm text-slate-600">{m.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
