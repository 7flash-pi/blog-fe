import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaTelegramPlane,
} from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex gap-8 flex-col">
      {socialLinks.map((link) => (
        <div
          key={link.title}
          onClick={() => {
            window.open(link.url, "_blank");
          }}
        >
          {link.icon}
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;

const socialLinks = [
  {
    title: "Facebook",
    icon: <FaFacebook size={64} />,
    url: "https://www.facebook.com",
  },
  {
    title: "LinkedIn",
    icon: <FaLinkedin size={64} />,
    url: "https://www.linkedin.com",
  },
  {
    title: "Twitter",
    icon: <FaTwitter size={64} />,
    url: "https://www.twitter.com",
  },
  {
    title: "Telegram",
    icon: <FaTelegramPlane size={64} />,
    url: "https://www.telegram.com",
  },
];
