type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "amir.shafat1@gmail.com",
  title: "Hi, I’m Amir 👋",
  // profile: "/profile.webp",
  description:
    "“Hey there! I’m Amir, your friendly neighborhood web developer.",
  socials: [
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/amir-shafat-b261b8219/",
    },
    {
      label: "Facebook",
      link: "https://www.facebook.com/amir.shafat.5/",
    },
    {
      label: "Github",
      link: "https://github.com/amirs18",
    },
  ],
};

export default presentation;
