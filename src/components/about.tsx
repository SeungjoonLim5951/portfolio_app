export function About() {
  return (
    <section
      id="about"
      className="container py-16 sm:py-32 max-w-screen-2xl"
    >
      <h2 className="text-2xl font-bold tracking-tight text-center sm:text-4xl">
        About Me
      </h2>
      <div className="grid grid-cols-1 gap-12 mt-12 sm:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold">Who I Am</h3>
          <p className="mt-4 text-muted-foreground">
            I'm a passionate and results-oriented web developer with a knack for
            creating engaging and user-friendly digital experiences. With a
            strong foundation in both design principles and modern frontend
            technologies, I strive to build products that are not only visually
            appealing but also highly functional and accessible.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Experience</h3>
          <ul className="mt-4 space-y-4">
            <li className="p-4 border rounded-md">
              <h4 className="font-semibold">Frontend Developer</h4>
              <p className="text-sm text-muted-foreground">
                Tech Solutions Inc. | 2021 - Present
              </p>
              <p className="mt-2 text-sm">
                - Developed and maintained responsive web applications using
                React, Next.js, and TypeScript.
                <br />- Collaborated with designers and backend developers to
                deliver high-quality features.
              </p>
            </li>
            <li className="p-4 border rounded-md">
              <h4 className="font-semibold">Web Design Intern</h4>
              <p className="text-sm text-muted-foreground">
                Creative Agency | 2020 - 2021
              </p>
              <p className="mt-2 text-sm">
                - Assisted in designing and prototyping user interfaces.
                <br />- Gained experience with Figma, Sketch, and Adobe XD.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
} 