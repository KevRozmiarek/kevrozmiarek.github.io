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
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "read about my research.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research",
          title: "research",
          description: "learn about my research and download some of my posters.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "details about me.",
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
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-på-tykk-is-norwegian-documentary",
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
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=UJ83ePwAAAAJ", "_blank");
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
