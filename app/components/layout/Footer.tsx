import Container from '@/app/components/ui/Container';

import { LINKS, NAV_LINKS } from '@/app/constants/links';

const socials = [
  {
    name: 'GitHub',
    href: LINKS.github,
  },
  {
    name: 'LinkedIn',
    href: LINKS.linkedin,
  },
  {
    name: 'Email',
    href: 'mailto:umarfarooqhusain@gmail.com',
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-5 border-t border-zinc-900 px-6 pt-2">
      <Container
        className="
          py-14
        "
      >
        {/* Top */}
        <div
          className="
            flex
            flex-col
            md:flex-row
            justify-between
            gap-10
          "
        >
          {/* Brand */}
          <div className="max-w-md">
            <h2 className="text-2xl font-bold">
              Umar
              <span className="text-blue-500">.</span>
            </h2>

            <p className="mt-4 text-zinc-300">
              Frontend Developer focused on building fast, modern, and
              user-friendly web experiences.
            </p>

            <p className="mt-6 text-sm text-zinc-500">
              Built with Next.js, TypeScript & Tailwind CSS.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold">Navigation</h3>

            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="
                      text-zinc-400
                      hover:text-white
                      transition-colors
                    "
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold">Connect</h3>

            <ul className="mt-5 space-y-3">
              {socials.map(social => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      text-zinc-400
                      hover:text-blue-400
                      transition-colors
                    "
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            mt-12
            pt-6
            border-t
            border-zinc-900
            flex
            flex-col
            md:flex-row
            justify-between
            gap-4
          "
        >
          <p className="text-sm text-zinc-500">
            © {year} Umar Farooq. All rights reserved.
          </p>

          <p className="text-sm text-zinc-500">
            Designed & developed with attention to detail.
          </p>
        </div>
      </Container>
    </footer>
  );
}
