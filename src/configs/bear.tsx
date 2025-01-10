import type { PersonalData } from "~/types";

const bear: PersonalData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:paw",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-la:dragon",
        excerpt: "Hey there! I'm a dragon lost in human world..."
      },
      {
        id: "github-stats",
        title: "Github Stats",
        file: "markdown/github-stats.md",
        icon: "i-icon-park-outline:github",
        excerpt: "Here are some status about my github account..."
      },
      {
        id: "about-site",
        title: "About This Site",
        file: "markdown/about-site.md",
        icon: "i-octicon:browser",
        excerpt: "Something about this personal portfolio site..."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: "i-octicon:repo",
    md: [
      {
        id: "visual-testing",
        title: "Visual Testing",
        file: "https://raw.githubusercontent.com/Arghajit47/Playwright-Visual-Testing/main/README.md",
        icon: "i-bi:image-fill",
        excerpt:
          "A framework implemented in playwright using resembleJs and tesseractJs...",
        link: "https://github.com/Arghajit47/Playwright-Visual-Testing"
      },
      {
        id: "performance-testing",
        title: "Performance Testing",
        file: "https://raw.githubusercontent.com/Arghajit47/playwright-lighthouse-performance-testing/main/Readme.md",
        icon: "i-ri:gamepad-line",
        excerpt: "A framework implemented in playwright using Google lighthouse...",
        link: "https://github.com/Arghajit47/playwright-lighthouse-performance-testing"
      },
      {
        id: "database-testing",
        title: "Database Testing",
        file: "https://raw.githubusercontent.com/Arghajit47/Playwright-database-testing/main/README.md",
        icon: "i-ri:newspaper-fill",
        excerpt: "A framework implemented in playwright with postgreSQL...",
        link: "https://github.com/Arghajit47/playwright-database-testing"
      },
      {
        id: "v-card",
        title: "vCard Portfolio",
        file: "https://raw.githubusercontent.com/Arghajit47/VCard-Portfolio-Arghajit/master/README.md",
        icon: "i-fa-brands:vuejs",
        excerpt: "A simple vCard portfolio...",
        link: "https://arghajit47.github.io/VCard-Portfolio-Arghajit/"
      },
      {
        id: "mail-report",
        title: "Mail Reporter",
        file: "https://raw.githubusercontent.com/Arghajit47/playwright-mail-report-and-API-ZOD-validation/master/README.md",
        icon: "i-akar-icons:sword",
        excerpt: "A playwright based automated reports with email notifications...",
        link: "https://arghajit47.github.io/playwright-mail-report-and-API-ZOD-validation/"
      },
      {
        id: "api-playwright",
        title: "Playwright API Testing",
        file: "https://raw.githubusercontent.com/Arghajit47/playwright-mail-report-and-API-ZOD-validation/master/README.md",
        icon: "i-ri:newspaper-fill",
        excerpt:
          "Performs API schema validation using Zod for robust testing and reporting...",
        link: "https://arghajit47.github.io/playwright-mail-report-and-API-ZOD-validation/"
      },
      {
        id: "jenkins",
        title: "Jenkins test CI/CD",
        file: "https://raw.githubusercontent.com/Arghajit47/PlaywrightWithJenkins/main/README.md",
        icon: "i-icon-park-outline:heavy-metal",
        excerpt: "A playwright test framework integrated with Jenkins pipeline...",
        link: "https://github.com/Arghajit47/PlaywrightWithJenkins"
      },
      {
        id: "api-selenium",
        title: "Selenium API Testing",
        file: "https://raw.githubusercontent.com/Arghajit47/Selenium-API-Testing/master/ReadMe.md",
        icon: "i-gg:format-text",
        excerpt: "API Testing with Selenium Rest-Assured library...",
        link: "https://github.com/Arghajit47/Selenium-API-Testing"
      },
      {
        id: "Loadtesting-k6",
        title: "Load Testing",
        file: "https://raw.githubusercontent.com/Arghajit47/LoadTesting-k6/loadTesting/README.md",
        icon: "i-ant-design:audio-filled",
        excerpt: "Automated Load Testing using Graphana K6...",
        link: "https://github.com/Arghajit47/LoadTesting-k6"
      }
      // {
      //   id: "pcalg-py",
      //   title: "PC Algorithm",
      //   file: "https://raw.githubusercontent.com/Renovamen/pcalg-py/master/README.md",
      //   icon: "i-tabler:atom-2",
      //   excerpt: "Implement PC algorithm in Python...",
      //   link: "https://github.com/Renovamen/pcalg-py"
      // },
      // {
      //   id: "midgard",
      //   title: "Midgard",
      //   file: "https://raw.githubusercontent.com/Renovamen/midgard/master/README.md",
      //   icon: "i-bx:game",
      //   excerpt: "An interactive version of my resume, powered by Vue...",
      //   link: "https://resume.zxh.io/"
      // },
      // {
      //   id: "image-captioning",
      //   title: "Image Captioning",
      //   file: "https://raw.githubusercontent.com/Renovamen/Image-Captioning/master/README.md",
      //   icon: "i-heroicons-solid:fire",
      //   excerpt: "PyTorch implementation of image captioning models...",
      //   link: "https://github.com/Renovamen/Image-Captioning"
      // },
      // {
      //   id: "wordle-helper",
      //   title: "Wordle Helper",
      //   file: "https://raw.githubusercontent.com/Renovamen/wordle-helper/main/README.md",
      //   icon: "i-bi:grid-1x2",
      //   excerpt: "Help you solve Wordle puzzles...",
      //   link: "https://wordle.zxh.io"
      // },
      // {
      //   id: "cube-solver",
      //   title: "Cube Solver",
      //   file: "https://raw.githubusercontent.com/Renovamen/Just-a-Cube/master/README.md",
      //   icon: "i-bx:cube",
      //   excerpt: "A rubik's cube solver (layer-by-layer & two-phase)...",
      //   link: "https://cube.zxh.io"
      // },
      // {
      //   id: "alkaid",
      //   title: "Alkaid",
      //   file: "https://raw.githubusercontent.com/Renovamen/alkaid/main/README.md",
      //   icon: "i-simple-icons:stellar",
      //   excerpt: "Minimal reinforcement-learning toolbox for PyTorch...",
      //   link: "https://github.com/Renovamen/alkaid"
      // },
      // {
      //   id: "fishmail",
      //   title: "Fishmail",
      //   file: "https://raw.githubusercontent.com/Renovamen/Fishmail/master/README.md",
      //   icon: "i-game-icons:fish-escape",
      //   excerpt: "上班的时候装作在 Gmail 上查邮件的样子看知乎摸鱼...",
      //   link: "https://fishmail.vercel.app"
      // }
    ]
  }
];

export default bear;
