import wordcraft from '../assets/wordcraft.png';
import suppcheck from '../assets/suppcheck.png';
import checklist from '../assets/checklist.png';

export const projects = [
  {
    id: 0,
    title: "CheckList",
    image: checklist,
    description: "A full-stack task management REST API built with ASP.NET Core and backed by a PostgreSQL database hosted on Supabase.",
    link: "https://to-do-dun-mu.vercel.app/",
    bulletPoints: [
      "Architected a RESTful API with ASP.NET Core (.NET 10) following clean controller and service layer separation.",
      "Integrated Supabase for JWT-based authentication and managed a PostgreSQL database for persistent task storage.",
      "Implemented a health check endpoint for service monitoring and uptime verification.",
    ]
  },
  {
    id: 1,
    title: "WordCraft",
    image: wordcraft,
    description: "A Discord bot leveraging OpenAI's GPT-3 to provide translation services across modern languages and historical dialects such as Old English and Pirate.",
    bulletPoints: [
      "Built a RESTful API with Node.js and Express to handle requests from Discord and interact with external libraries.",
      "Integrated OpenAI's GPT-3 language model to generate responses and process natural language requests.",
      "Implemented custom translation algorithms for handling historical and dialectal language variations.",
    ]
  },
  {
    id: 2,
    title: "SuppCheck",
    image: suppcheck,
    description: "A mobile application that identifies supplement ingredients by photographing a product label using OCR and image recognition.",
    bulletPoints: [
      "Deployed the database on Microsoft Azure and optimized the application for performance and scalability.",
      "Collaborated with a remote development team using Git for version control and code review workflows.",
    ]
  }
];
