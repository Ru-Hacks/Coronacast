/*
var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=f53bb7e9ed3545deb75d7215f07dca25';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })
*/

// var el = document.getElementById('news1');
// if(el){
//   el.addEventListener('click', getNews);
// }

//document.getElementById("news1").addEventListener("click", getNews);
function getNews(){

    // var url ='http://newsapi.org/v2/everything?' +
    // 'q=Corona&' +
    // 'from=2020-05-00&' +
    // 'sortBy=popularity&' +
    // 'apiKey=f53bb7e9ed3545deb75d7215f07dca25';

    var url = 'https://newsapi.org/v2/top-headlines?q=Corona&country=ca&apiKey=f53bb7e9ed3545deb75d7215f07dca25';

    var req = new Request(url);

    fetch(req)
        .then(function(response) {
            let data = response.json();
            console.log("poopy");
            console.log(data);

        });


}