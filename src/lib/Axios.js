import Axios from "axios";

const baseURL =
"https://api.geoapify.com/v1/geocode"

export const buildKeyParams = (address) => {
  const formatAddress= address.trim().replace(" ","%20");
  return `search?text=${formatAddress}&country=mexico&apiKey=b122f87c55d34c908108cbc97c502a31`
}


const axios = Axios.create({
  baseURL,
});

export default axios;
