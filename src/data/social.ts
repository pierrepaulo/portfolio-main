import type { LucideIcon } from "lucide-react";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
  detail: string;
  showInHeader: boolean;
  showInContact: boolean;
};

export const socials: SocialLink[] = [
  {
    label: "Email",
    href: "mailto:pierrepaulotf@gmail.com",
    icon: Mail,
    detail: "pierrepaulotf@gmail.com",
    showInHeader: true,
    showInContact: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/pierrepaulo",
    icon: Github,
    detail: "github.com/pierrepaulo",
    showInHeader: true,
    showInContact: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pierre-paulo-temer/",
    icon: Linkedin,
    detail: "www.linkedin.com/in/pierre-paulo-temer/",
    showInHeader: true,
    showInContact: true,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5533991993858",
    icon: MessageCircle,
    detail: "+55 (33) 99199-3858",
    showInHeader: false,
    showInContact: true,
  },
];

export const headerSocials = socials.filter((social) => social.showInHeader);
export const contactChannels = socials.filter((social) => social.showInContact);

