import Section from "./Section.jsx";
import Timeline from "./Timeline.jsx";
import { education } from "../data.js";

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic journey">
      <Timeline
        items={education.map((e) => ({
          title: e.degree,
          org: e.org,
          location: e.location,
          period: e.period,
          score: e.score,
        }))}
      />{" "}
    </Section>
  );
}
