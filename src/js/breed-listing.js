import BreedList from "./breedList.mjs";
import Datasource from "./dataSource.mjs";
import { loadPartials } from "../utils/utils.mjs";

const data = new Datasource();
const element = document.querySelector(".cat-list");
const catList = new BreedList(data, element);

catList.initialize();

// loading header and footer
loadPartials(
  "header",
  "footer",
  "navigation",
  "../public/partials/header.html",
  "../public/partials/footer.html",
  "../public/partials/navigation.html"
);
