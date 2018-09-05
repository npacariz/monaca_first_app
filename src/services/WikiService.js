import axios from "axios";

export default class Wiki {
  constructor() {
    axios.defaults.baseURL = "https://en.wikipedia.org/w/";
  }
  getResults(searchTerm) {
    return axios.get(
      `api.php?action=query&origin=*&list=search&srsearch=${searchTerm}&utf8=&format=json`
    );
  }

  getSingleArticle(title) {
    title = title.split(" ").join("_");

    return axios.get(`api.php?action=parse&page=${title}&origin=*&format=json`);
  }
}

export const wikiService = new Wiki();
