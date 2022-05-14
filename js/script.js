
let elFilmsList = $(".films-list");

let createFilmItem = function(kino) {
  kinolar.splice(100)
    let newFilmItem = createElement("li","film-item list-unstyled  bg-primary rounded-3 m-3","");
    let newFilmCast = createElement("p","",`Cast: ${kino.cast.join(", ")}`);
    let newFilmGenres = createElement("p","",`Genres: ${kino.genres.join(", ")}`);
    let newFilmTitle = createElement("p","",`Title: ${kino.title}`);
    let newFilmYear = createElement("p","",`Year: ${kino.year}`);

  newFilmItem.append(newFilmCast,newFilmGenres,newFilmTitle,newFilmYear);
  return newFilmItem;
}

let renderElements = function() {
  let elFilmWrapperFragment = document.createDocumentFragment();

  kinolar.forEach(function(kino) {
    elFilmWrapperFragment.appendChild(createFilmItem(kino));
  });
  
  elFilmsList.appendChild(elFilmWrapperFragment);
}

renderElements(kinolar);