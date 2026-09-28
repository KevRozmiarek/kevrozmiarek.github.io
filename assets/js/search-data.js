// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "news",
          description: "field research, media appearances, and milestones.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "published research and manuscripts in progress.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research",
          title: "research",
          description: "Arctic hydroclimate, water and carbon isotopes, and research with uncrewed aircraft.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Updated September 2026.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "curating the next generation of scholars for a world that needs them.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-ice-on-fire-hbo-documentary",
          title: 'Ice on Fire — HBO documentary',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2019-ice-on-fire/";
            },},{id: "news-på-tykk-is-norwegian-documentary",
          title: 'På tykk is - Norwegian Documentary',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2022-nrk-paa-tykk-is/";
            },},{id: "news-the-arctic-39-s-permafrost-obsessed-methane-detectives",
          title: 'The Arctic&amp;#39;s Permafrost-Obsessed Methane Detectives',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-04-06-arctic-permafrost-methane-detectives/";
            },},{id: "news-drone-experiment-reveals-how-greenland-ice-sheet-is-changing",
          title: 'Drone experiment reveals how Greenland ice sheet is changing',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-03-27-drone-experiment-greenland/";
            },},{id: "news-local-middle-schoolers-get-a-crash-course-in-earth-science-at-instaar",
          title: 'Local middle schoolers get a crash course in Earth science at INSTAAR',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-04-25-instaar-middle-school-showcase/";
            },},{id: "news-instaar-honors-students-and-faculty-at-spring-celebration-luncheon",
          title: 'INSTAAR honors students and faculty at spring celebration luncheon',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-05-14-instaar-spring-celebration/";
            },},{id: "news-the-college-where-drones-are-everywhere",
          title: 'The College Where Drones Are Everywhere',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-chronicle-drones-everywhere/";
            },},{id: "news-i-completed-my-ph-d-in-earth-science-at-cu-boulder-and-joined-instaar-as-a-research-scientist-i-working-with-dr-bradley-markle-on-arctic-hydroclimate-machine-learning-and-water-isotopes-read-more-about-my-research",
          title: 'I completed my Ph.D. in Earth Science at CU Boulder and joined INSTAAR...',
          description: "",
          section: "News",},{id: "news-my-arctic-research-is-featured-in-pbs-39-s-ages-of-ice",
          title: 'My Arctic research is featured in PBS&amp;#39;s Ages of Ice',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-09-16-ages-of-ice/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/CV_Kevin_Rozmiarek.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%65%76%69%6E.%72%6F%7A%6D%69%61%72%65%6B@%63%6F%6C%6F%72%61%64%6F.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/KevRozmiarek", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/kevin-rozmiarek-0610b358", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-4065-8259", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=UJ83ePwAAAAJ", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://www.colorado.edu/instaar/kevin-rozmiarek", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
