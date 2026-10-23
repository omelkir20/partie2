import Link from "next/link";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.slug} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <p className="tech">{p.tech.join(" · ")}</p>
            <Link href={`/projects/${p.slug}`}>Voir le projet</Link>
          </div>
        ))}
      </div>
    </section>
  );
}
