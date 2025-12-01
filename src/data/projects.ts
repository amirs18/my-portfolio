export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "PDF Ambulance",
    techs: ["PDF Tools"],
    link: "https://pdfambulance.com",
  },
  {
    title: "Apoint (appointment management system)",
    techs: ["Astro", "TypeScript", "Supabase"],
    link: "https://astro-supabase-apoint.vercel.app",
  },
  {
    title: "apolloServer with openidConnect",
    techs: ["Apollo", "graphql", "OIDC"],
    link: "https://github.com/amirs18/apolloServer-with-openidConnect",
  },
];

export default projects;
