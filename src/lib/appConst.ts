import twitterIcon from "../assets/social/square-x-twitter.svg";
import linkedinIcon from "../assets/social/linkedin.svg";
import githubIcon from "../assets/social/square-github.svg";
import defaultProjectImg from "../assets/projects/defaultProject.png";
import exomexpressImg from "../assets/projects/project ecomexpress Screenshot 2024-06-12 105437.png";

export const personalDetail = {
  name: "CodeversePro",
  role: "Frontend Develope",
  discription:
    "With a passion for developing modern React web apps for commercial businesses",
};

export const socialLinks = [
  {
    label: "Twitter",
    imgUrl: twitterIcon,
    externalLink: "#",
  },
  {
    lable: "LinkedIn",
    imgUrl: linkedinIcon,
    externalLink: "#",
  },
  {
    label: "Github",
    imgUrl: githubIcon,
    externalLink: "#",
  },
];

export const mySkills = [
  ["HTML", "CSS", "JavaScript", "TailwindCSS", "Bootstrap"],
  ["React", "NextJS", "Redux", "ContextAPI"],
  ["Node.Js", "ExpressJs"],
  ["MongoDB", "Firebase", "PostgreSQL"],
  ["Git", "Github", "Heroku", "Netlify"],
  ["Aws", "Docker"],
];

export const projects = [
  {
    projectImg: defaultProjectImg,
    projectTitle: "Portfolio Project",
    gitUrl: "https://github.com/datacreeded/portfolio",
    projectDescription: "A Potfolio WebApp",
  },
  {
    projectImg: exomexpressImg,
    projectTitle: "EcomExpress",
    gitUrl: "https://ecomexpresss-93c1c55679af.herokuapp.com/",
    projectDescription:
      "EcomExpress is frontend design for the ecomerce website",
  },
];

export const menu = [
  {
    label: "About-Me",
    url: "#About-Me",
  },
  {
    label: "Skills",
    url: "#Skills",
  },
  {
    label: "Projects",
    url: "#Projects",
  },
  {
    label: "Contact-Me",
    url: "#Contact-Me",
  },
];
