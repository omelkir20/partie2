import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills">
      <h2>DevSecOps Skills</h2>
      <div className="skills-grid">
        {skills.map((s) => (
          <div key={s.name} className="skill-card">
            <span>{s.name}</span>
            <div className="bar"><div style={{ width: `${s.level}%` }} /></div>
          </div>
        ))}
      </div>
    </section>
  );
}
