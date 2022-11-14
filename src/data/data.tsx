import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from "@heroicons/react/outline";

import GithubIcon from "../components/Icon/GithubIcon";
// import InstagramIcon from "../components/Icon/InstagramIcon";
import LinkedInIcon from "../components/Icon/LinkedInIcon";
import YouTubeIcon from "../components/Icon/YoutubeIcon";
// import StackOverflowIcon from "../components/Icon/StackOverflowIcon";
// import TwitterIcon from "../components/Icon/TwitterIcon";
import heroImage from "../images/header-background.webp";
import porfolioImage1 from "../images/portfolio/portfolio-1.jpg";
import porfolioImage2 from "../images/portfolio/portfolio-2.jpg";
import porfolioImage3 from "../images/portfolio/portfolio-3.jpg";
import porfolioImage4 from "../images/portfolio/portfolio-4.jpg";
import porfolioImage5 from "../images/portfolio/portfolio-5.jpg";
import porfolioImage6 from "../images/portfolio/portfolio-6.jpg";
import porfolioImage7 from "../images/portfolio/portfolio-7.jpg";
import porfolioImage8 from "../images/portfolio/portfolio-8.jpg";
import porfolioImage9 from "../images/portfolio/portfolio-9.jpg";
import porfolioImage10 from "../images/portfolio/portfolio-10.jpg";
import porfolioImage11 from "../images/portfolio/portfolio-11.jpg";
import profilepic from "../images/profilepic.jpg";
import testimonialImage from "../images/testimonial.webp";
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from "./dataDef";

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Enrique Quiroz | Data Science | Software Development",
  description: "Enrique Quiroz Personal Website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: "hero",
  About: "about",
  Contact: "contact",
  Portfolio: "portfolio",
  Resume: "resume",
  Skills: "skills",
  Stats: "stats",
  Testimonials: "testimonials",
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Enrique Quiroz`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Copenhagen based{" "}
        <strong className="text-stone-100">M.Sc. in Business Analytics</strong>,
        currently working as a Full Stack Developer at an Analytics team at{" "}
        <strong className="text-stone-100">Danfoss</strong> where we bring
        end-to-end machine learning solutions to retail customers.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, I will probably be{" "}
        <strong className="text-stone-100">Rock Climbing</strong>, out on trails
        doing some <strong className="text-stone-100">MTB</strong>, or
        travelling around wherever climbing takes me.
      </p>
    </>
  ),
  actions: [
    {
      href: "https://enriqueqs.github.io/CV/Quiroz_Enrique_CV_.pdf",
      text: "Resume",
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: "Contact",
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Curiousness and logical thinking is part of my DNA. I am an Industrial Engineer and MSc. in Business Analytics. 
  My interest lies within Data Science, Software Development, and the possibilities of this intersection. I am a fast adapter, and will quickly settle in new environments.
   I take challenges with a smile, and see joy in presenting thorough executed work. I have experience in MLOps using Azure, developing APIs using Nest.js framework, as well as frontend development using ReactJS.`,
  aboutItems: [
    { label: "Location", text: "Copenhagen, DK", Icon: MapIcon },
    { label: "Age", text: "29", Icon: CalendarIcon },
    { label: "Nationality", text: "Chilean / Italian", Icon: FlagIcon },
    {
      label: "Interests",
      text: "Climbing, Mountain Biking, Travelling",
      Icon: SparklesIcon,
    },
    {
      label: "Study",
      text: "Denmark Technical University",
      Icon: AcademicCapIcon,
    },
    {
      label: "Employment",
      text: "Danfoss",
      Icon: OfficeBuildingIcon,
    },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: "Spoken languages",
    skills: [
      {
        name: "English",
        level: 10,
      },
      {
        name: "Spanish",
        level: 10,
      },
      {
        name: "Danish",
        level: 5,
      },
    ],
  },
  {
    name: "Software development",
    skills: [
      {
        name: "Python",
        level: 9,
      },
      {
        name: "React",
        level: 7,
      },
      {
        name: "Typescript",
        level: 7,
      },
    ],
  },
  {
    name: "Data Science/ MLOps",
    skills: [
      {
        name: "Azure ML",
        level: 8,
      },
      {
        name: "PyTorch",
        level: 7,
      },
      {
        name: "PySpark",
        level: 4,
      },
    ],
  },
  // {
  //   name: "Mobile development",
  //   skills: [
  //     {
  //       name: "React Native",
  //       level: 9,
  //     },
  //     {
  //       name: "Flutter",
  //       level: 4,
  //     },
  //     {
  //       name: "Swift",
  //       level: 3,
  //     },
  //   ],
  // },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: "Project title 1",
    description: "Give a short description of your project here.",
    url: "https://timbaker.me",
    image: porfolioImage1,
  },
  {
    title: "Project title 2",
    description: "Give a short description of your project here.",
    url: "https://timbaker.me",
    image: porfolioImage2,
  },
  {
    title: "Project title 3",
    description: "Give a short description of your project here.",
    url: "https://timbaker.me",
    image: porfolioImage3,
  },
  {
    title: "Project title 4",
    description: "Give a short description of your project here.",
    url: "https://timbaker.me",
    image: porfolioImage4,
  },
  {
    title: "Project title 5",
    description: "Give a short description of your project here.",
    url: "https://timbaker.me",
    image: porfolioImage5,
  },
  {
    title: "Project title 6",
    description: "Give a short description of your project here.",
    url: "https://timbaker.me",
    image: porfolioImage6,
  },
  {
    title: "Project title 7",
    description: "Give a short description of your project here.",
    url: "https://timbaker.me",
    image: porfolioImage7,
  },
  {
    title: "Project title 8",
    description: "Give a short description of your project here.",
    url: "https://timbaker.me",
    image: porfolioImage8,
  },
  {
    title: "Project title 9",
    description: "Give a short description of your project here.",
    url: "https://timbaker.me",
    image: porfolioImage9,
  },
  {
    title: "Project title 10",
    description: "Give a short description of your project here.",
    url: "https://timbaker.me",
    image: porfolioImage10,
  },
  {
    title: "Project title 11",
    description: "Give a short description of your project here.",
    url: "https://timbaker.me",
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: "September 2019 - January 2022",
    location: "Danmarks Tekniske Universitet",
    title: "M. Sc. Eng. in Business Analytics",
    content: (
      <p>
        Learned both the theory and applicability of advanced methods from data
        science and optimization to solve critical business challenges. Enabling
        me to not only work and manipulate data but, most importantly, learned
        how to transform data to actionable decisions that meet value creation
        goals. I specifically followed two study lines, one being{" "}
        <a href="https://www.dtu.dk/english/education/graduate/msc-programmes/business-analytics/study-lines/predictive-analytics">
          Predictive Analytics
        </a>{" "}
        and the other one being{" "}
        <a href="https://www.dtu.dk/english/education/graduate/msc-programmes/business-analytics/study-lines/analytics-in-finance">
          Analytics in Finance
        </a>
      </p>
    ),
  },
  {
    date: "2012 - 2018",
    location: "Pontificia Universidad Catolica de Chile",
    title: "Industrial Engineering, Diploma in Mechanical Engineering",
    content: (
      <p>
        Twelve semesters of education with more than 55 courses passed, mainly
        focusing on management, economics, finances and production. The
        mechanical engineering diploma consisted mainly in subjects as
        Thermodynamics, Heat Transfer and HVAC.
      </p>
    ),
  },
  {
    date: "Spring 2017",
    location: "Lund University",
    title: "Exchange Student",
    content: (
      <p>
        One semester abroad with the aim to improve my level of English (learned
        some Swedish as well) and getting to know the Nordic culture.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: "March 2022 - Present",
    location: "Danfoss",
    title: "Full Stack Developer",
    content: (
      <p>
        Involved in different projects, from helping release our team's first
        machine learning solution (Compressor Insights), developing an API
        related to Automated Demand Response, to making changes in the Frontend
        of{" "}
        <a href="https://www.danfoss.com/da-dk/products/dcs/monitoring-and-services/alsense-food-retail/">
          Alsense
        </a>
      </p>
    ),
  },
  {
    date: "January 2021 - June 2021",
    location: "Danmarks Tekniske Universitet",
    title: "Teaching Assistant",
    content: (
      <>
        Teaching assistant for the courses:
        <ul className="list-inside list-disc">
          <li>Introduction to Financial Engineering</li>
          <li>Financial Products</li>
          <li>
            <a href="https://kurser.dtu.dk/course/42186">
              Model-Based Machine Learning
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    date: "February 2021 - Febrauary 2022",
    location: "Danfoss",
    title: "Data Analyst Student Worker",
    content: (
      <p>
        Work in a team that brings insight and analytics based on IoT devices to
        the supermarket industry. Different tasks within data engineering and
        data science. More specifically, build dashboards with Power BI, move
        data between across different platforms, and use machine learning
        algorithms to detect anomaly in energy consumption.
      </p>
    ),
  },
  {
    date: "October 2020 - January 2021",
    location: "Donkey Republic",
    title: "Business Intelligence Analyst",
    content: (
      <a>
        Conduct data analysis to provide the business with valuable insights.
        Help develop the company's data strategy and quality of data.
        Communicate the needs and and results with different business units
      </a>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: "John Doe",
      text: "Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.",
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg",
    },
    {
      name: "Jane Doe",
      text: "Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).",
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg",
    },
    {
      name: "Someone else",
      text: "Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.",
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg",
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: "Get in touch.",
  description:
    "Do not hesitate to contact me, you can send me an e-mail or connect via LinkedIn 😃",
  items: [
    {
      type: ContactType.Email,
      text: "enriqueqs@gmail.com",
      href: "mailto:enriqueqs@gmail.com",
    },
    {
      type: ContactType.Location,
      text: "Copenhagen, Denmark",
      href: "https://goo.gl/maps/PrsJBFA4GeHScLuM8",
    },
    {
      type: ContactType.LinkedIn,
      text: "Enrique Quiroz",
      href: "https://www.linkedin.com/in/enriqueqs/",
    },
    {
      type: ContactType.Github,
      text: "enriqueqs",
      href: "https://github.com/enriqueqs",
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: "Github", Icon: GithubIcon, href: "https://github.com/enriqueqs" },
  {
    label: "LinkedIn",
    Icon: LinkedInIcon,
    href: "https://www.linkedin.com/in/enriqueqs/",
  },
  {
    label: "Youtube",
    Icon: YouTubeIcon,
    href: "https://www.youtube.com/user/enriqueqs/videos",
  },

  // {
  //   label: "Instagram",
  //   Icon: InstagramIcon,
  //   href: "https://www.instagram.com/tbakerx/",
  // },
  // {
  //   label: "Twitter",
  //   Icon: TwitterIcon,
  //   href: "https://twitter.com/TimBakerx",
  // },
];
