import wordcraft from '../assets/wordcraft.webp';
import suppcheck from '../assets/suppcheck.webp';

export const projects = [
  {
    id: 0,
    title: "WordCraft",
    image: wordcraft,
    description: "A Discord bot that leverages the power of the OpenAI GPT-3 language model to provide translation services, not only for modern languages but also for older dialects such as Old English and Pirate.",
    bulletPoints: [
      "Built a RESTful API with Node.js Express to handle requests from the Discord platform and interact with the other libraries.",
      "Utilized the Discord API to connect the bot to the Discord platform and process user requests.",
      "Integrated OpenAI's GPT-3 language model to generate responses and process natural language requests.",
      "Implemented custom translation algorithms for handling historical and dialectal variations in language."
    ]
  },
  {
    id: 1,
    title: "SuppCheck",
    image: suppcheck,
    description: "A mobile application that provides users with ingredient information for a given brand by taking a picture of the brand's name and ingredient list.",
    bulletPoints: [
      "Deployed the database on Microsoft Azure and optimized the application for performance and scalability.",
      "Utilized Git for version control and collaborated with a remote development team.",
    ]
  }
];