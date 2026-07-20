import FadeIn from '@/app/components/animations/FadeIn';
import Stagger from '@/app/components/animations/Stagger';
import StaggerItem from '@/app/components/animations/StaggerItem';

import Container from '@/app/components/ui/Container';
import Card from '@/app/components/ui/Card';
import Badge from '@/app/components/ui/Badge';
import SectionHeading from '@/app/components/ui/SectionHeading';

import { skills } from '@/app/data/skills';

export default function Skills() {
  return (
    <section id="skills">
      <Container className="pt-7">
        {/* Heading */}
        <FadeIn>
          <SectionHeading
            label="Skills"
            title="Technologies I Work With"
            description="
              I focus on building modern, responsive web applications and continuously expand my knowledge by learning new technologies.
            "
          />
        </FadeIn>

        {/* Skill Cards */}
        <Stagger>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map(category => (
              <StaggerItem key={category.title}>
                <Card className="p-6 smooth hover:-translate-y-2 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10">
                  <h3 className="text-2xl font-semibold">{category.title}</h3>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {category.skills.map(skill => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </div>
        </Stagger>
      </Container>
    </section>
  );
}
``;
