import FadeIn from '@/app/components/animations/FadeIn';
import Stagger from '@/app/components/animations/Stagger';
import StaggerItem from '@/app/components/animations/StaggerItem';

import Container from '@/app/components/ui/Container';
import Card from '@/app/components/ui/Card';
import SectionHeading from '@/app/components/ui/SectionHeading';

import { journey } from '@/app/data/journey';

export default function Journey() {
  return (
    <section>
      <Container className="pt-7">
        {/* Heading */}
        <FadeIn>
          <SectionHeading
            label="My Journey"
            title="The Road That Shaped My Career"
            description="Every skill, project, and challenge has been a step toward becoming a better software developer."
          />
        </FadeIn>

        {/* Timeline */}
        <Stagger>
          <div className="mt-14 relative">
            {/* Vertical Line */}
            <div
              className="
                absolute
                left-4
                top-0
                bottom-0
                w-px
                bg-zinc-800
              "
            />

            {journey.map(item => (
              <StaggerItem key={item.title}>
                <div className="relative pl-14 pb-10">
                  {/* Timeline Dot */}
                  <div
                    className="
                      absolute
                      left-2.5
                      top-2
                      h-3
                      w-3
                      rounded-full
                      bg-blue-500
                      shadow-lg
                      shadow-blue-500/60
                    "
                  />

                  {/* Journey Card */}
                  <Card
                    className="
                      p-6
                      hover:-translate-y-2
                      smooth
                      hover:border-blue-500
                      hover:shadow-xl
                      hover:shadow-blue-500/10
                    "
                  >
                    <p className="text-blue-500 font-medium">{item.year}</p>

                    <h3 className="mt-2 text-2xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-zinc-300">{item.description}</p>
                  </Card>
                </div>
              </StaggerItem>
            ))}
          </div>
        </Stagger>
      </Container>
    </section>
  );
}
