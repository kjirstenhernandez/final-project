const apiURL =
  "https://api.thecatapi.com/v1/images/search?limit=3&api_key=live_vYBougwwbfP7f8jXBY8yn9ZffrNnOREGScRBlKkw9QTQOX9ZtYv6C1dNceQuRbAZ";

// Load the dynamic header and footer
export async function loadPartials(
  headerID,
  footerID,
  navID,
  headerPath,
  footerPath,
  navPath
) {
  const header_element = document.getElementById(headerID);
  const footer_element = document.getElementById(footerID);
  const nav_element = document.getElementById(navID);

  const header_response = await fetch(headerPath);
  const footer_response = await fetch(footerPath);
  const nav_response = await fetch(navPath);

  const header_template = await header_response.text();
  const footer_template = await footer_response.text();
  const nav_template = await nav_response.text();

  header_element.insertAdjacentHTML("afterbegin", header_template);
  footer_element.insertAdjacentHTML("afterbegin", footer_template);
  nav_element.insertAdjacentElement("afterbegin", nav_template);
}

// General function to render any given template
export function renderListWithTemplate(
  templateFunction, //the function used to build the card
  parentElement, //target element
  data, //array of information to be made into the list
  image, //image URL from api
  position = "afterbegin" //where to place the inserted HTML
) {
  const listItems = data.map((cat) => templateFunction(cat, image));

  parentElement.insertAdjacentHTML(position, listItems.join(""));
}

// Get cat identification from URL
export function getParams(criteria) {
  const query = window.location.search;
  const param = new URLSearchParams(query);
  const cat = param.get(criteria);

  return cat;
}

export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
