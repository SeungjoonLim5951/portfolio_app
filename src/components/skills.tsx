const skillsData = [
  { name: "HTML5", logo: "H" },
  { name: "CSS3", logo: "C" },
  { name: "JavaScript", logo: "J" },
  { name: "TypeScript", logo: "T" },
  { name: "React", logo: "R" },
  { name: "Next.js", logo: "N" },
  { name: "Tailwind CSS", logo: "T" },
  { name: "Figma", logo: "F" },
  { name: "Node.js", logo: "N" },
  { name: "Supabase", logo: "S" },
];

export function Skills() {
  return (
    <section id="skills" className="container py-16 sm:py-32">
      <h2 className="text-2xl font-bold tracking-tight text-center sm:text-4xl">
        My Skills
      </h2>
      <div className="grid grid-cols-2 gap-6 mt-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {skillsData.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center p-6 border rounded-lg shadow-sm transition-transform duration-300 hover:scale-105"
          >
            <div className="flex items-center justify-center w-16 h-16 mb-4 text-4xl font-bold rounded-full bg-secondary text-secondary-foreground">
              {skill.logo}
            </div>
            <p className="font-semibold text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 