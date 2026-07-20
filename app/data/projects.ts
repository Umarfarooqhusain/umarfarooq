import { Project } from '@/app/types/project';

export const projects: Project[] = [
  {
    title: 'Foreign Exchange Checker',
    description:
      'A real-time currency converter that fetches live exchange rates, supports multiple currencies, and provides a clean, responsive interface for quick and accurate conversions.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Frankfurter API'],
    image: '/images/FX-checker.png',
    github: 'https://github.com/Umarfarooqhusain/foreign-exchange-app',
    live: 'https://foreign-exchange-app-ihyr.vercel.app/',
  },

  {
    title: 'WeatherNow App',
    description:
      'A modern weather application that displays current conditions and forecasts using live weather APIs, featuring a responsive UI and location-based weather information.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Open-Meteo API'],
    image: '/images/weatherNow.png',
    github: 'https://github.com/Umarfarooqhusain/weatherNow',
    live: 'https://weather-now-theta-steel.vercel.app/',
  },

  {
    title: 'Advance Typing App',
    description:
      'An interactive typing practice application designed to improve typing speed and accuracy with real-time WPM, accuracy tracking, and a responsive user experience.',
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS'],
    image: '/images/typingApp.png',
    github: 'https://github.com/Umarfarooqhusain/typingSpeedPractice',
    live: 'https://typing-speed-practice-beta.vercel.app/',
  },
  {
    title: 'ZeemsaOverseas',
    description:
      'An artisan product showcase website designed to highlight handcrafted collections through modern layouts, responsive design, and a visually rich browsing experience.',
    technologies: ['React.js', 'javaScript', 'Tailwind CSS'],
    image: '/images/zeemsa.png',
    github: 'https://github.com/Umarfarooqhusain/zeemsareact',
    live: 'https://zeemsaoverseas.com/',
  },
  {
    title: 'Shirooque',
    description:
      'An interactive typing practice application designed to improve typing speed and accuracy with real-time WPM, accuracy tracking, and a responsive user experience.',
    technologies: ['Shopify'],
    image: '/images/shirooque.png',
    github: '',
    live: 'https://shirooque.com/',
  },
];
