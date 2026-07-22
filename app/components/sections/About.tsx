import FadeIn from '@/app/components/animations/FadeIn';
import Container from '../ui/Container';
import Card from '../ui/Card';

export default function About() {
  return (
    <section id="about" className="pt-22">
      <Container>
        <FadeIn>
          <p className="text-blue-500 font-medium">About.ts</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            My Journey Into Development
          </h2>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <FadeIn delay={0.2}>
            <Card className="p-8 font-mono overflow-hidden">
              <div className="flex gap-2 mb-6">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>

              <div className="space-y-3 text-sm md:text-base">
                <p>
                  <span className="text-purple-400">class</span>{' '}
                  <span className="text-yellow-300">UmarFarooq</span>
                  {' {'}
                </p>

                <p className="text-zinc-500 ml-5">// My development journey</p>

                <p className="ml-5">
                  <span className="text-purple-400">constructor</span>
                  () {' {'}
                </p>

                <p className="ml-10">
                  this.background =
                  <span className="text-green-400">
                    "Electrical Engineering";
                  </span>
                </p>

                <p className="ml-10">
                  this.passion =
                  <span className="text-green-400">"Web Development";</span>
                </p>

                <p className="ml-10">
                  this.focus =
                  <span className="text-green-400">"React & Next.js";</span>
                </p>

                <p className="ml-5">{'}'}</p>

                <p className="ml-5">future() {' {'}</p>

                <p className="ml-10 text-green-400">
                  return "Full Stack Blockchain Developer";
                </p>

                <p className="ml-5">{'}'}</p>

                <p>{'}'}</p>
              </div>
            </Card>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div>
              <p className="text-blue-500 font-medium">
                git commit -m "Started Building"
              </p>
              <h3 className="mt-4 text-3xl font-bold">
                Turning curiosity into digital experiences.
              </h3>

              <p className="mt-6 text-lg text-zinc-400">
                I began my technical journey with a Diploma in Electrical
                Engineering from Jamia Millia Islamia. Over time, my curiosity
                shifted toward software development, where I found my passion
                for creating modern web applications.
              </p>

              <p className="mt-5 text-lg text-zinc-400">
                Today, I build responsive interfaces with React, Next.js and
                TypeScript. Every project I create helps me grow toward becoming
                a complete full-stack engineer.
              </p>

              <div className="mt-10 space-y-5">
                <div className="border-l-2 border-blue-500 pl-5">
                  <p className="text-blue-400 font-bold">2023</p>

                  <p>Started learning modern web technologies.</p>
                </div>

                <div className="border-l-2 border-blue-500 pl-5">
                  <p className="text-blue-400 font-bold">2025</p>

                  <p>Mastered React and Next.js fundamentals.</p>
                </div>

                <div className="border-l-2 border-blue-500 pl-5">
                  <p className="text-blue-400 font-bold">Today</p>

                  <p>
                    Building real projects and moving toward full-stack
                    development.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
