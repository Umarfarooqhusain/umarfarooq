import Stagger from '@/app/components/animations/Stagger';
import StaggerItem from '@/app/components/animations/StaggerItem';
import Container from '../ui/Container';

const stats = [
  {
    number: '5+',
    title: 'Projects Built',
    description: 'Real-world applications with modern technologies',
  },
  {
    number: '10+',
    title: 'Technologies',
    description: 'Frontend, backend concepts and development tools',
  },
  {
    number: '100+',
    title: 'GitHub Commits',
    description: 'Consistent learning and continuous improvement',
  },
  {
    number: 'Daily',
    title: 'Learning',
    description: 'Improving skills and building new things',
  },
];

export default function Trust() {
  return (
    <section>
      <Container className="pt-7">
        <Stagger>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(item => (
              <StaggerItem key={item.title}>
                <div
                  className="
                    card
                    p-6
                    smooth
                    hover:-translate-y-2
                    hover:border-blue-500
                  "
                >
                  <h2 className="text-4xl font-bold text-blue-500">
                    {item.number}
                  </h2>

                  <h3 className="mt-3 text-xl text-white">{item.title}</h3>

                  <p className="mt-2 text-sm">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </Stagger>
      </Container>
    </section>
  );
}
