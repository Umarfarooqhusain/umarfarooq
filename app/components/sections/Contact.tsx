import FadeIn from '@/app/components/animations/FadeIn';
import Stagger from '@/app/components/animations/Stagger';
import StaggerItem from '@/app/components/animations/StaggerItem';

import Container from '@/app/components/ui/Container';
import Card from '@/app/components/ui/Card';

import { contacts } from '@/app/data/contacts';

export default function Contact() {
  return (
    <section id="contact">
      <Container className="pt-7">
        <FadeIn delay={0.1}>
          <h2 className="mt-6 max-w-4xl text-4xl md:text-6xl font-bold">
            Let's build something
            <span className="text-gradient">amazing together.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-6 max-w-2xl text-lg text-zinc-300">
            I’m currently looking for ReactJs and nextJs opportunities,
            freelance work, and exciting projects. If you have an idea or
            opportunity, I would love to hear from you.
          </p>
        </FadeIn>

        {/* Contact Cards */}
        <Stagger>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {contacts.map(contact => (
              <StaggerItem key={contact.title}>
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card
                    className="
                      group
                      p-8
                      smooth
                      hover:-translate-y-2
                      hover:border-blue-500
                      hover:shadow-xl
                      hover:shadow-blue-500/10
                    "
                  >
                    <div className="text-3xl">{contact.icon}</div>

                    <p className="mt-5 text-blue-500 font-medium">
                      {contact.title}
                    </p>

                    <h3 className="mt-2 text-lg break-all">{contact.value}</h3>

                    <p
                      className="
                        mt-6
                        text-sm
                        text-zinc-500
                        transition-colors
                        group-hover:text-zinc-300
                      "
                    >
                      Click to connect →
                    </p>
                  </Card>
                </a>
              </StaggerItem>
            ))}
          </div>
        </Stagger>
      </Container>
    </section>
  );
}
