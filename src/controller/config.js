var path = {
  // api: "http://localhost/workspace/TomisPort/api/v1",
  // pages: "http://localhost/workspace/TomisPort/pages",
  api: "https://backend.tomyd.cc/api/v1",
  pages: "https://backend.tomyd.cc/pages",
};

async function getConfig(url) {
  var config = {}

  await fetch(url, {
    method: 'GET',
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Network response was not ok.');
  })
  .then(data => {
    config = data;
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
  // console.log(url,' --',config)

  return config;

} 

export {path,getConfig};