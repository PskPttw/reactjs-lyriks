const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com',
    'X-RapidAPI-Key': 'a9c2a3e220msh2a505d2d813d97ap135bc4jsn819713e5a7fb'
  }
}

fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err))