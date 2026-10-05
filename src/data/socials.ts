export interface SocialLink {
  id: string;
  name: string;
  username: string;
  url: string;
  isPlaceholder: boolean;
  icon: string;
}

export const contactDetails = {
  email: "amaninamdar7775@gmail.com",
  phone: "+91-7775909442",
  location: "Pune, Maharashtra, India",
  preferredDomain: "https://amaninamdar.in"
};

export const socialLinks: SocialLink[] = [
  {
    id: "linkedin",
    name: "LinkedIn",
    username: "aman-inamdar",
    url: "https://www.linkedin.com/in/", // Placeholder: update with your personal LinkedIn handle
    isPlaceholder: true,
    icon: "Linkedin"
  },
  {
    id: "github",
    name: "GitHub",
    username: "amaninamdar",
    url: "https://github.com/", // Placeholder: update with your personal GitHub username
    isPlaceholder: true,
    icon: "Github"
  },
  {
    id: "leetcode",
    name: "LeetCode",
    username: "amaninamdar",
    url: "https://leetcode.com/u/", // Placeholder: update with your personal LeetCode username
    isPlaceholder: true,
    icon: "Code"
  },
  {
    id: "email",
    name: "Email",
    username: "amaninamdar7775@gmail.com",
    url: "mailto:amaninamdar7775@gmail.com",
    isPlaceholder: false,
    icon: "Mail"
  }
];
