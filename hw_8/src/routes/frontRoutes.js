export default {
  pages: {
    home: "/",
    teachers: {
      root: "/teachers",
      add: "new-teacher",
      edit: ":id/edit",
      details: ":id",
    },
    meetings: "/meetings",
    aboutApp: "/about-app",
    aboutDev: "/about-dev",
  },
  navigate: {
    home: "/",
    teachers: {
      root: "/teachers",
      add: "/teachers/new-teacher",
      edit: (id) => `/teachers/${id}/edit`,
      details: "/teachers/:id",
    },
    meetings: "/meetings",
    aboutApp: "/about-app",
    aboutDev: "/about-dev",
  },
};
