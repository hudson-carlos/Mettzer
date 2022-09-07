const axios = require('axios');

export default (value, page) => {
  if (value.includes(' ')) {
    value = value.replace(/ /g, "%20")
  }

  const apiKey = 'GkNbCO9s8ciHInZLgt30fuVzxDJerlj1';
  const url = `https://core.ac.uk:443/api-v2/articles/search/${value}?page=${page}&pageSize=10&metadata=true&fulltext=false&citations=false&similar=false&duplicate=false&urls=true&faithfulMetadata=false&apiKey=${apiKey}`;
  return axios.get(url)
  .then(({data}) => data.data);
}

