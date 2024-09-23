const filters = [
  { name: "All", filter: "*" },
  { name: "jQuery", filter: "jQuery" },
  { name: "javascript", filter: "javascript" },
  { name: "design", filter: "design" },
];

const filtersContainer = document.getElementById("filters");

filters.forEach(({ filter, name }) => {
  filtersContainer.innerHTML += `
    <a href="#" data-filter="${
      name === "All" ? filter : `.${filter}`
    }" class="${name === "All" && "active"}">${name}</a>
    `;
});
