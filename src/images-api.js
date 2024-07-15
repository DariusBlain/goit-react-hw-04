import axios from "axios";

const BASE_URL = "https://api.unsplash.com";
const END_POINT = "/search/photos";

const fetchImagesWithSearch = async (searchQuery, pageNum, pageLim) => {
  const { data } = await axios.get(`${BASE_URL}${END_POINT}`, {
    params: {
      client_id: "jdCTUKqzBz3xQoj8tA5jedQjYaU9QURnh_dnkCa5f5E",
      query: searchQuery,
      orientation: "landscape",
      page: pageNum,
      per_page: pageLim,
    },
  });
  return data.results;
};

export default fetchImagesWithSearch;
