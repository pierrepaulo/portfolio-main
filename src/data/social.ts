import type { IconType } from "react-icons";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
  detail: string;
  showInHeader: boolean;
  showInContact: boolean;
};

export const socials: SocialLink[] = [
  {
    label: "Email",
    href: "mailto:pierrepaulotf@gmail.com",
    icon: FiMail,
    detail: "pierrepaulotf@gmail.com",
    showInHeader: true,
    showInContact: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/pierrepaulo",
    icon: FaGithub,
    detail: "github.com/pierrepaulo",
    showInHeader: true,
    showInContact: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pierre-paulo-temer/",
    icon: FaLinkedinIn,
    detail: "www.linkedin.com/in/pierre-paulo-temer/",
    showInHeader: true,
    showInContact: true,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5533991993858",
    icon: FaWhatsapp,
    detail: "+55 (33) 99199-3858",
    showInHeader: false,
    showInContact: true,
  },
];

export const headerSocials = socials.filter((social) => social.showInHeader);
export const contactChannels = socials.filter((social) => social.showInContact);
