import axios from "axios";

axios.defaults.baseURL = "http://registry.npmjs.com/-/v1";

export const searchTerm = async (term) => {
  try {
    const response = await axios.get(`/search?text=${term}`);
    const data = response.data.objects.map((item) => item.package);
    // return { ...data, total: response.data.total };
    return { data, total: response.data.total };
  } catch (error) {
    console.log(error);
  }
};
