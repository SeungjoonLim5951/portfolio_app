export function Hero() {
  return (
    <section
      id="home"
      className="container flex flex-col items-center justify-center h-screen max-w-screen-2xl"
    >
      <div className="text-center">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          Joon
          <br />
          Web Developer & Designer
        </h1>
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          A passionate developer who builds beautiful and functional web
          experiences.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Contact Me
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            View CV
          </a>
        </div>
      </div>
    </section>
  );
} 