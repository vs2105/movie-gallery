let cl = console.log;
const backdrop = document.getElementById('backDrop');
const mymodal = document.getElementById('mymodal');
const showmodalbtn = document.getElementById('showmodal');
const addMoviebtn = document.getElementById('addMoviebtn');
const movieContainer = document.getElementById('movieContainer')
const title = document.getElementById('title');
const imgurl = document.getElementById('imgurl');
const rating = document.getElementById('rating');


const myclose = [...document.querySelectorAll('.myclose')]

let movieArray = [{
      title: "RRR",
      imgurl: `https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg`,
      rating: 9.1
   },

   {
      title: "drishyam-2",
      imgurl: `https://im.rediff.com/movies/2022/nov/17drishyam1.jpg`,
      rating: 7.1
   },

   {
      title: "Avtar-2",
      imgurl: `https://imageio.forbes.com/specials-images/imageserve/63c9fa55cf07a8cf416e3aea/0x0.jpg?format=jpg&width=1200`,
      rating: 8.2
   },


];

//let result= "";
//movieArray.forEach(movie => {
// result +=`
// <div class="col-sm-4">
//<div class="card">
//<div class="card-header">
// ${movie.title}
//</div>
//<div class="card-body">
//  <figure>
//    <img class="img-fluid" src=" ${movie.imgurl}" alt="${movie.title}" title="${movie.title}">
// </figure>
//</div>
//<div class="card-footer text-right star">
//${movie.rating} / 5
//</div>
//</div>
//</div>
//  `
//})

//movieContainer.innerHTML =result;


const templating = (arr) => {
   let result = " ";

   arr.forEach(movie => {
      result += `
    <div class="col-sm-4">
    <div class="card mb-4 my-card">
   <div class="card-header ">
      <h4>
       ${movie.title}
       </h4>
    </div>
    <div class="card-body child">
        <figure >
            <img src=" ${movie.imgurl}" alt="${movie.title}" title="${movie.title}" class="bannerimg">
        </figure>
    </div>
    <div class="card-footer">
       <i class="fa-sharp fa-solid fa-star cole"></i><strong class="rate">${movie.rating}/10</strong>
    </div>
    </div>
   </div>
      `;
   })
   movieContainer.innerHTML = result;
}
templating(movieArray);

const toggleModalHandler = (eve) => {
   mymodal.classList.toggle("show");
   backdrop.classList.toggle("show");
}


const onMovieAddHandler = (eve) => {
   let obj = {
      title: title.value,
      imgurl: imgurl.value,
      rating: rating.value

   }
   movieArray.unshift(obj)
   title.value = " ";
   imgurl.value = " ";
   rating.value = " ";
   cl(movieArray)
   toggleModalHandler()
   templating(movieArray);

}


showmodalbtn.addEventListener("click", toggleModalHandler)
myclose.forEach(ele => ele.addEventListener("click", toggleModalHandler))
backdrop.addEventListener("click", toggleModalHandler)
addMoviebtn.addEventListener("click", onMovieAddHandler)