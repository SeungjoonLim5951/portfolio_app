const projectsData = [
  {
    title: "Project One",
    description:
      "A web application that helps users manage their tasks and projects efficiently.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    githubUrl: "https://github.com",
    demoUrl: "https://github.com",
    thumbnail: "/placeholder.svg", // Replace with actual thumbnail path
  },
  {
    title: "Project Two",
    description:
      "An e-commerce platform with a focus on user experience and modern design.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com",
    demoUrl: "https://github.com",
    thumbnail: "/placeholder.svg",
  },
  {
    title: "Project Three",
    description:
      "A portfolio website template built with Astro and Tailwind CSS for speed.",
    stack: ["Astro", "Tailwind CSS", "Markdown"],
    githubUrl: "https://github.com",
    demoUrl: "https://github.com",
    thumbnail: "/placeholder.svg",
  },
];

export function Projects() {
  return (
    <section id="projects" className="container py-16 sm:py-32">
      <h2 className="text-2xl font-bold tracking-tight text-center sm:text-4xl">
        My Projects
      </h2>
      <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project) => (
          <div
            key={project.title}
            className="overflow-hidden border rounded-lg shadow-lg"
          >
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-muted-foreground">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-semibold rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-6">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium border rounded-md"
                >
                  GitHub
                </a>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium border rounded-md"
                >
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 