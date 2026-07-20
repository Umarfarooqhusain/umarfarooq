import FadeIn from '@/app/components/animations/FadeIn';
import Container from '@/app/components/ui/Container';
import Card from '@/app/components/ui/Card';
import Button from '@/app/components/ui/Button';
import Badge from '@/app/components/ui/Badge';

import { LINKS } from '@/app/constants/links';
import ScrambleText from '../ui/ScambleText';

const technologies = [
  'React',
  'Next.js',
  'JavaScript',
  'TypeScript',
  'Tailwind CSS',
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative
        min-h-screen
        w-full
        pt-32
        overflow-hidden
        
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          right-0
          top-1/2
          -translate-y-1/2
          h-[350px]
          w-[350px]
          md:h-[450px]
          md:w-[450px]
          rounded-full
          bg-blue-500/15
          blur-[120px]
        "
      />

      <Container
        className="
          pt-7
          relative
          z-10
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-12
          lg:gap-24
          items-center
        "
      >
        {/* Left */}
        <div>
          <FadeIn>
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-green-500/30
                bg-green-500/10
                px-4
                py-2
                text-sm
                font-medium
                text-green-400
              "
            >
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1
              className="
                mt-6
                text-4xl
                sm:text-5xl
                md:text-7xl
                font-black
                leading-[0.9]
              "
            >
              Umar Farooq
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-4xl font-bold mt-1 tracking-[3px]">
              Building high-performance interfaces in <ScrambleText />
            </h1>
          </FadeIn>

          {/* Buttons */}
          <FadeIn delay={0.3}>
            <div
              className="
                mt-10
                flex
                flex-col
                sm:flex-row
                gap-4
              "
            >
              <Button href="#projects">View Projects</Button>

              <Button href={LINKS.resume} variant="secondary">
                Download Resume
              </Button>
            </div>
          </FadeIn>

          {/* Technologies */}
          <FadeIn delay={0.4}>
            <div className="mt-10 flex flex-wrap gap-3">
              {technologies.map(tech => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={0.5}>
          <div className="relative flex justify-center lg:justify-end">
            <div
              className="
                absolute
                h-80
                w-80
                rounded-full
                bg-blue-500/15
                blur-[120px]
              "
            />

            <Card
              className="
                  relative
                  z-10
                  w-full
                  max-w-xl
                  p-8
                  font-mono
                  overflow-hidden
                "
            >
              {/* Code */}
              <div className="space-y-2 text-sm md:text-base">
                <div>
                  <span className="text-purple-400">class</span>{' '}
                  <span className="text-yellow-300">UmarFarooq</span>
                  {' {'}
                </div>

                <div className="text-zinc-500 ml-4">
                  // I build because I love creating.
                </div>

                <div className="ml-4">
                  <span className="text-purple-400">constructor</span>
                  ()
                  {' {'}
                </div>

                <div className="ml-8">
                  <span className="text-red-400">this</span>.
                  <span className="text-blue-400">name</span>=
                  <span className="text-green-400">"Umar Farooq"</span>;
                </div>

                <div className="ml-8">
                  <span className="text-red-400">this</span>.
                  <span className="text-blue-400">role</span>=
                  <span className="text-green-400">"Frontend Developer"</span>;
                </div>

                <div className="ml-8">
                  <span className="text-red-400">this</span>.
                  <span className="text-blue-400">stack</span>= [
                  <span className="text-green-400">
                    "Next.js","React", "TypeScript"
                  </span>
                  ] ;
                </div>

                <div className="ml-4">{'}'}</div>

                <div className="ml-4">
                  <span className="text-yellow-300">currentlyLearning</span>
                  ()
                  {' {'}
                </div>

                <div className="ml-8 text-green-400">
                  return "Blockchain technology";
                </div>

                <div className="ml-4">{'}'}</div>

                <div>{'}'}</div>
              </div>
            </Card>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
