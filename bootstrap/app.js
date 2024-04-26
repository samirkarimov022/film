fetch('https://api.tvmaze.com/shows')
    .then(res => res.json())
    .then(a => {
        getFilms(a);
    });
    console.log(document.getElementById("film-1").innerHTML)

var area = document.getElementById("cards-area");

function getFilms(shows) {
   area.innerHTML = "";
   shows.forEach(film =>{
    area.innerHTML +=`
    <div class="card col-4">
        <img src="${film.image}" class="card-img-top" alt="${film.name}">
      
        <div class="card-body">
          <h5 class="card-title">${film.name}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    `
   })
    // for (let i = 0; i < movies.length; i++) {
    //     html += `
    //         <div class="col-4">
    //             <div class="film">
    //                 <img src="${movies[i].image.medium}" class="card-img-top" alt="${movies[i].name}" data-image="${movies[i].image.medium}" >
    //                 <div class="movie-body">
    //                     <h5 class="movie-title">${movies[i].name}</h5>
    //                 </div>
    //             </div>
    //         </div>
    //     `;
    // }
    // html += `</div>`;
    // place.innerHTML = html;

    // var cardimgtop = document.querySelectorAll("card-img-top");
    // cardimgtop.forEach(img => {
    //     img.addEventListener("click", function () {
    //         var modalImage = document.getElementById("modalImage");
    //         modalImage.src = this.getAttribute("data-image");
    //     });
    // });
}