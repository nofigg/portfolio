export default function Home() {
  return (
    <div className="max-w-5xl mx-auto py-12">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Hi, I'm Nolan
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          I build things for the web. Software engineer focused on creating intuitive and impactful digital experiences.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/nofigg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            GitHub
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </section>
      {/* Content will go here */}
    </div>
  );
}
