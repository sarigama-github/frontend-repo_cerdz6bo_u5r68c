import ImageWithFallback from './ImageWithFallback';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ImageWithFallback src="/images/logo-placeholder.png" alt="Logo" className="h-8 w-auto" />
            <span className="font-semibold">Global IT Vision Pvt Ltd</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Twitter/X</a>
            <a href="#" className="hover:text-white">GitHub</a>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-slate-500">© {new Date().getFullYear()} Global IT Vision Private Limited. All rights reserved.</div>
      </div>
    </footer>
  );
}
