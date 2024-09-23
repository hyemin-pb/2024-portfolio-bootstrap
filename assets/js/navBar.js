const menu = [
  { path: "index", name: "Home" },
  { path: "pages/about", name: "About Me" },
  { path: "pages/services", name: "Services" },
  { path: "pages/works", name: "Works" },
];

function renderNavBar() {
  const currentPath = window.location.pathname;
  const isInSubdirectory = currentPath.includes("/pages/");

  const basePath = isInSubdirectory ? "../" : "";

  let menuItems = "";
  menu.map((item) => {
    const fullPath = item.path.endsWith(".html")
      ? item.path
      : `${item.path}.html`;
    const isActive =
      currentPath === `/${fullPath}` ||
      (currentPath.startsWith("/pages/") && fullPath.startsWith("pages/"));

    menuItems += `<li><a href="${basePath}${item.path}.html" class="${
      isActive ? "active" : ""
    }">${item.name}</a></li>`;
  });

  const navbar = `
      <div class="container py-2 py-md-5">
        <div class="row align-items-start">
          <div class="col-md-2">
            <ul class="custom-menu">
                ${menuItems}
            </ul>
          </div>
          <div class="col-md-6 d-none d-md-block mr-auto">
            <div class="tweet d-flex">
              <span class="icofont-twitter text-white mt-2 mr-3"></span>
              <div>
                <p>
                  <em>
                    저는 작은 목표를 설정하고 이를 성취해 나가는 것을 즐기는 것을
                좋아합니다. 꾸준히 노력하는 끈기로 문제를 해결하며, 정리와
                문서화를 통해 업무를 효율적으로 처리하는 것을 중요하게
                생각합니다. 또한, 동료 간의 원활한 소통을 중시하며, 협업을 통해
                사용자 친화적이고 안정적인 웹 애플리케이션을 개발하는 것을
                목표로 삼고 있습니다.
                  </em>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 d-none d-md-block">
            <h3>Hire Me</h3>
            <p>
              +82 010-2053-8583 <br />
              khnm31@naver.com
            </p>
          </div>
        </div>
      </div>
    `;

  const mainNavbar = document.getElementById("main-navbar");
  if (mainNavbar) {
    mainNavbar.innerHTML = navbar;
  }
}
window.addEventListener("load", renderNavBar());
