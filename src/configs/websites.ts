import type { WebsitesData } from "~/types";

const websites: WebsitesData = {
  favorites: {
    title: "Suggestions",
    sites: [
      {
        id: "my-resume",
        title: "Website",
        img: "img/icons/launchpad/resume.png",
        link: "https://arghajit47.github.io/Arghajit47/",
        inner: true
      },
      {
        id: "my-github",
        title: "Github",
        img: "img/sites/github.svg",
        link: "https://github.com/Arghajit47"
      },
      {
        id: "my-linkedin",
        title: "Linkedin",
        img: "img/sites/linkedin.svg",
        link: "https://www.linkedin.com/in/arghajit-singha-1646341bb/"
      },
      {
        id: "my-email",
        title: "Email",
        img: "img/sites/gmail.svg",
        link: "mailto:arghajitsingha47@gmail.com"
      },
      {
        id: "medium",
        title: "Medium",
        img: "img/sites/medium.png",
        link: "https://medium.com/@arghajitsingha47"
      }
    ]
  },
  freq: {
    title: "Frequently Visited",
    sites: [
      {
        id: "github",
        title: "Github",
        img: "img/sites/github.svg",
        link: "https://github.com/"
      },
      {
        id: "youtube",
        title: "Youtube",
        img: "img/sites/youtube.svg",
        link: "https://youtube.com/"
      },
      {
        id: "twitter",
        title: "Twitter",
        img: "img/sites/twitter.svg",
        link: "https://www.twitter.com/"
      },
      {
        id: "medium",
        title: "Medium",
        img: "img/sites/medium.png",
        link: "https://medium.com/"
      },
      {
        id: "pinterest",
        title: "Pinterest",
        img: "img/sites/pinterest.svg",
        link: "https://www.pinterest.com/"
      },
      {
        id: "leetcode",
        title: "LeetCode",
        img: "img/sites/leetcode.svg",
        link: "https://leetcode.com/u/arghajitsingha47/"
      },
      {
        id: "reddit",
        title: "Reddit",
        img: "img/sites/reddit.svg",
        link: "https://www.reddit.com/"
      }
    ]
  }
};

export default websites;
