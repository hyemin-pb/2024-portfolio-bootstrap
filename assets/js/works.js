const items = [
  {
    category: "javascript",
    title: "bootstrap portfolio",
    subtitle: "responsive web",
    img: "assets/img/bootstrap-portfolio.png",
    link: "https://hyemin-pb.github.io/2024-portfolio-bootstrap/",
  },
  {
    category: "javascript",
    title: "phantom",
    subtitle: "responsive web",
    img: "assets/img/phantom.webp",
    link: "https:/hyemin-pb.github.io/responsive-phantom",
  },
  {
    category: "javascript",
    title: "massively",
    subtitle: "responsive web",
    img: "assets/img/massively.webp",
    link: "https:/hyemin-pb.github.io/responsive-massively",
  },
  {
    category: "javascript",
    title: "funny flakes",
    subtitle: "responsive web",
    img: "assets/img/funnyFlakes.webp",
    link: "https:/hyemin-pb.github.io/responsive-funnyflakes",
  },
  {
    category: "javascript",
    title: "forty",
    subtitle: "responsive web",
    img: "assets/img/forty.webp",
    link: "https:/hyemin-pb.github.io/responsive-forty",
  },
  {
    category: "javascript",
    title: "starbucks",
    subtitle: "Publishing",
    img: "assets/img/starbucks.webp",
    link: "https://hyemin-pb.github.io/javascript-starbucks/",
  },
  {
    category: "javascript",
    title: "그림판",
    subtitle: "canvas를 사용한 Publishing",
    img: "assets/img/paint.webp",
    link: "https://hyemin-pb.github.io/javascript-paint/",
  },
  {
    category: "javascript",
    title: "moment",
    subtitle: "Publishing",
    img: "assets/img/moment.webp",
    link: "https://hyemin-pb.github.io/javascript-moment/",
  },
  {
    category: "javascript",
    title: "gomin talk",
    subtitle: "Frontend develop",
    img: "assets/img/gomintalk.webp",
    link: "pages/pb-gomintalk.html",
  },
  {
    category: "javascript",
    title: "내돈내산",
    subtitle: "Fullstack develop",
    img: "assets/img/naedonnaesan.png",
    link: "pages/pb-naedonnaesan.html",
  },

  {
    category: "jQuery",
    title: "2021 Portfolio",
    subtitle: "jQuery Fullpage",
    img: "assets/img/thum-w04.jpg",
    link: "https:/hyemin-pb.github.io/2021-portfolio-fullpage",
  },
  {
    category: "jQuery",
    title: "비밀의 숲2",
    subtitle: "jQuery Fullpage",
    img: "assets/img/thum-w05.jpg",
    link: "https:/hyemin-pb.github.io/stranger2-promotion-fullpage",
  },
  {
    category: "jQuery",
    title: "Melon",
    subtitle: "Responsive Web",
    img: "assets/img/thum-w02.jpg",
    link: "https:/hyemin-pb.github.io/melon-music-reboot",
  },
  {
    category: "design",
    title: "SK 아트리움 리뉴얼",
    subtitle: "Design",
    img: "assets/img/thum-d02.jpg",
    link: "pages/de-skartrium.html",
  },
  {
    category: "design",
    title: "롯데카드 프로모션",
    subtitle: "Design",
    img: "assets/img/thum-d03-1.jpg",
    link: "pages/de-lottecard.html",
  },
  {
    category: "design",
    title: "여행사 이벤트 프로모션",
    subtitle: "Design",
    img: "assets/img/thum-d01.jpg",
    link: "pages/de-travelpromo.html",
  },
];

const grid = document.getElementById("portfolio-grid");

items.forEach((item) => {
  const { pathname } = window.location;
  const isInSubdirectory = pathname.includes("/pages");
  const imgSrc = isInSubdirectory ? `../${item.img}` : item.img;
  console.log(pathname, isInSubdirectory, imgSrc);

  const isExternalLink = item.link.startsWith("http");

  grid.innerHTML += `
      <div class="item col-sm-6 col-md-4 col-lg-4 mb-4 ${item.category}">
        <a href="${item.link}" class="item-wrap fancybox" ${
    isExternalLink ? 'target="_blank"' : ""
  }>
          <div class="work-info">
            <h3>${item.title}</h3>
            <span>${item.subtitle}</span>
          </div>
          <img class="img-fluid" src="${imgSrc}" />
        </a>
      </div>
    `;
});
