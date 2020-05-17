var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("https://thevirustracker.com/free-api?global=stats", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));