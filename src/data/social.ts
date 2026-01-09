import type { IconType } from "react-icons";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";

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
    href: "https://www.linkedin.com/in/pierrepaulo/",
    icon: FaLinkedinIn,
    detail: "linkedin.com/in/pierrepaulo",
    showInHeader: true,
    showInContact: true,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5500000000000",
    icon: FaWhatsapp,
    detail: "+55 (00) 00000-0000",
    showInHeader: false,
    showInContact: true,
  },
  {
    label: "Telefone",
    href: "tel:+5533991993858",
    icon: FiPhone,
    detail: "+55 33 99199-3858",
    showInHeader: false,
    showInContact: false,
  },
];

export const headerSocials = socials.filter((social) => social.showInHeader);
export const contactChannels = socials.filter((social) => social.showInContact);
