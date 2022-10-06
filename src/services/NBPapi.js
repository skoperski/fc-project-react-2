export const fetchApi = () => {
  return axios.get(
    "https://api.nbp.pl/api/exchangerates/tables/a/?format=json"
  );
};
