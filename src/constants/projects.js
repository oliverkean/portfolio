import ispb from '../assets/images/ispb.png'
import sccc from '../assets/images/sccc.png'
import swapii from '../assets/images/swapii.png'
import travel from '../assets/images/come_travel.png'

export const PROJECTS = [
  {
    name: 'Realtime Traffic Monitoring System',
    image: sccc,
    description:
      'A web application to help users track the status of traffic within the roads at Baguio City. Traffic is one of the issues within the city, this web application will be used to help users decide alternative routes to reach their destinations. This will be managed by admins by updating the traffic conditions within each route in real time.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Vue.js', 'Tailwind CSS', 'Mapbox', 'Laravel Reverb'],
    sourceCode: 'https://github.com/oliverkean/come-and-travel'
  },
  {
    name: 'Swapii: Bartering Web Application',
    image: swapii,
    description:
      'A web-based platform developed using the VILT stack (Vue.js, Inertia.js, Laravel, Tailwind CSS) that enables University of Baguio students and staff to barter items to reduce waste and help students financially. Features include real-time chat, trade management, user authentication, AI image validation, review/rating system, and admin analytics for monitoring activity and managing user.',
    technologies: ['Vue.js', 'Laravel', 'PHP', 'Inertia.js', 'Tailwind CSS', 'MySQL', 'Pusher', 'Laravel Breeze'],
    sourceCode: 'https://github.com/oliverkean/come-and-travel'
  },
  {
    name: 'Inventory System for Poultry Business',
    image: ispb,
    description:
      'A web-based system built with Laravel to manage poultry inventory, suppliers, and customer orders. It offers real-time updates, user authentication, and report generation about business operations and improve accuracy.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Livewire', 'Bootstrap', 'Laravel Breeze'],
    sourceCode: 'https://github.com/oliverkean/come-and-travel'
  },
  {
    name: 'Come and Travel: Travel Website for Baguio City',
    image: travel,
    description:
      'TravelCations is a tourism-focused web platform designed to showcase popular destinations, and local experiences in Baguio City. It provides users with travel guides. The site aims to boost local tourism through accessible and informative content.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/oliverkean/come-and-travel'
  },
];

export default PROJECTS;
