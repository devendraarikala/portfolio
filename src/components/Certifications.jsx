import Section from "./Section.jsx";
import Timeline from "./Timeline.jsx";
import { certifications } from "../data.js";

export default function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Certificates,Badges & workshops"
    >
      <Timeline
        items={certifications.map((c) => ({
          title: c.title,
          org: c.org,
          period: c.date,
          certUrl: c.certUrl,
          badgeUrl: c.badgeUrl,
        }))}
      />
    </Section>
  );
}
