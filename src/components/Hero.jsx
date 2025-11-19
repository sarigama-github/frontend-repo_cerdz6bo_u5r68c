import Spline from '@splinetool/react-spline';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">        
        <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
            Building Reliable Digital Solutions for a Connected World
          </h1>
          <p className="mt-6 text-lg text-slate-700 max-w-2xl">
            Global IT Vision Private Limited delivers modern web, mobile, cloud, cybersecurity, and AI solutions tailored to your business goals.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={() => scrollTo('#services')} className="inline-flex items-center rounded-md bg-blue-600 text-white px-6 py-3 hover:bg-blue-700 transition-colors shadow">
              Get Started
            </button>
            <button onClick={() => scrollTo('#about')} className="inline-flex items-center rounded-md bg-white text-blue-700 px-6 py-3 border border-blue-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
