import Section from "./Section.jsx";
import Timeline from "./Timeline.jsx";
import { experience } from "../data.js";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Internships">
      <Timeline
        items={experience.map((e) => ({
          title: e.role,
          org: e.org,
          period: e.period,
          points: e.points,
          certUrl: e.certUrl,
          badgeUrl: e.badgeUrl,
        }))}
      />{" "}
    </Section>
  );
}
