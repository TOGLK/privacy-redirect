const targets = /https?:\/\/(((www|maps)\.)?(google\.).*(\/search)|search\.(google\.).*)/;
const redirects = [
  { link: "https://duckduckgo.com", q: "/" },
  { link: "https://startpage.com", q: "/search/" },
  { link: "https://www.qwant.com", q: "/" },
  { link: "https://www.mojeek.com", q: "/search" },
  { link: "https://search.snopyta.org", q: "/" },
  { link: "https://searx.info", q: "/" },
  { link: "https://searx.be", q: "/" },
  { link: "https://search.disroot.org", q: "/" },
  { link: "https://searx.tuxcloud.net", q: "/" },
  { link: "https://searx.ninja", q: "/" },
  { link: "https://tromland.org/searx", q: "/search" },
];

export default {
  targets,
  redirects,
};
