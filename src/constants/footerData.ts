import { FaGithub, FaGlobe, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const socialButtons = [
    { url: "https://www.linkedin.com/in/jennypieloor/", id: "linkedin", label: "www.linkedin.com/in/jennypieloor/", icon: FaLinkedinIn, size: 16, smSize: 12, className: "xl:w-8 xl:h-8 md:w-7 md:h-7 w-6 h-6" },
    { url: "https://github.com/devJennyy", id: "globe", icon: FaGlobe, label: "Portfolio: In Development", size: 14, smSize: 12, className: "xl:w-8 xl:h-8 md:w-7 md:h-7 w-6 h-6" },
    { url: "https://github.com/devJennyy", id: "github", icon: FaGithub, label: "github.com/devJennyy", size: 16, smSize: 12, className: "xl:w-8 xl:h-8 md:w-7 md:h-7 w-6 h-6" },
    { url: "mailto:devjenny.official@gmail.com?subject=Job%20opportunity%20at%20Company%20Name", id: "gmail", icon: MdEmail, label: "devjenny.official@gmail.com", size: 17, smSize: 14, className: "xl:w-8 xl:h-8 md:w-7 md:h-7 w-6 h-6" },
  ];