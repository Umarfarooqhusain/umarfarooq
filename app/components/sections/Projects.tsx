import Image from 'next/image';

import FadeIn from '@/app/components/animations/FadeIn';
import Stagger from '@/app/components/animations/Stagger';
import StaggerItem from '@/app/components/animations/StaggerItem';

import Container from '@/app/components/ui/Container';
import Card from '@/app/components/ui/Card';
import Badge from '@/app/components/ui/Badge';
import Button from '@/app/components/ui/Button';
import SectionHeading from '@/app/components/ui/SectionHeading';

import { projects } from '@/app/data/projects';

export default function Projects() {
  return (
    <section id="projects" className="pt-22">
      <Container>
        {/* Heading */}
        <FadeIn>
          <SectionHeading
            label="Projects"
            title="Featured Work"
            description="A selection of projects that showcase my ability to design and build modern web applications."
          />
        </FadeIn>

        {/* Project Cards */}
        <Stagger>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {projects.map(project => (
              <StaggerItem key={project.title}>
                <Card
                  className="
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/10
                    bg-[#0f172a]
                    hover:border-blue-500/40
                    transition-all
                    duration-500
                  "
                >
                  {/* Editor Header */}
                  <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                    <span className="ml-3 text-sm text-zinc-400">
                      {project.title}.tsx
                    </span>
                  </div>

                  <div className="grid justify-center">
                    <div className="relative h-[340px]  overflow-hidden border-b border-white/10 lg:border-b-0 lg:border-r">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="
                          object-fit
                          transition-transform
                          duration-700
                          group-hover:scale-105
                        
                            
                        "
                      />
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div className="font-mono text-sm leading-8">
                        <p>
                          <span className="text-purple-400">const</span>{' '}
                          <span className="text-blue-300">project</span>{' '}
                          <span className="text-white">= {'{'}</span>
                        </p>

                        <p className="pl-6">
                          <span className="text-sky-400">title</span>
                          <span className="text-white">: </span>
                          <span className="text-emerald-400">
                            "{project.title}"
                          </span>
                          ,
                        </p>

                        <p className="pl-6">
                          <span className="text-sky-400">description</span>
                          <span className="text-white">: </span>
                          <span className="text-zinc-400">
                            "{project.description}"
                          </span>
                          ,
                        </p>

                        <p className="text-white">{'}'}</p>
                      </div>

                      <div className="mt-2 flex flex-wrap gap-3">
                        {project.technologies.map(tech => (
                          <Badge key={tech}>{tech}</Badge>
                        ))}
                      </div>

                      <div className="mt-8 flex gap-4">
                        <Button href={project.github}>{'< />'} Source</Button>

                        <Button href={project.live} variant="secondary">
                          ↗ Preview
                        </Button>
                      </div>
                    </div>
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
