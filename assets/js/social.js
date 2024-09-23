{
  /* <a href="#"><span class="icofont-share"></span></a> */
}

const socials = [
  { name: "blog", url: "https://hyemin12.github.io/", icon: "icofont-blogger" },
  { name: "github", url: "https://github.com/hyemin-pb", icon: "icofont-code" },
];

const socialsContainer = document.getElementById("social-grid");

socials.forEach(({ name, url, icon }) => {
  socialsContainer.innerHTML += `
    <a href="${url} target="_blank"><span class="${icon}"></span></a>
    `;
});
