import axios from "axios";

const BASE_URL = "https://api.unsplash.com";
const END_POINT = "/search/photos";

const fetchImagesWithSearch = async (searchQuery, pageNum) => {
  const { data } = await axios.get(`${BASE_URL}${END_POINT}`, {
    params: {
      client_id: "jdCTUKqzBz3xQoj8tA5jedQjYaU9QURnh_dnkCa5f5E",
      query: searchQuery,
      orientation: "landscape",
      page: pageNum,
      per_page: 15,
    },
  });
  return data;
};

export default fetchImagesWithSearch;
