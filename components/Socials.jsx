import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const socials = [
  {
    name: "github",
    icon: <FaGithub />,
    link: "https://github.com/TienNguyen2210",
  },
  {
    name: "kubjedub",
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/tienznguyen/",
  },
  {
    name: "instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/_tiemah_/",
  },
];
const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link
              key={index}
              href={social.link}
              className={iconStyles}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
