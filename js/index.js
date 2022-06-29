let elList = document.querySelector(".js-list");




for (items of information) {
  let newItem = document.createElement("li");
  let elTitle = document.createElement("h2");
  let elId = document.createElement("span");
  let elImg = document.createElement("img");
  let elGenres = document.createElement("h3");
  let elOverview = document.createElement("p");
  elTitle.textContent = `${items.title}`;
  elId.textContent = `${items.id}`;
  elImg.src = `${items.poster}`;
  elGenres.textContent = `${items.genres}`;
  elOverview.textContent = `${items.overview}`;

  elImg.setAttribute('class','img')
  newItem.setAttribute('class','box')


  newItem.appendChild(elImg)
  newItem.appendChild(elTitle)
  newItem.appendChild(elGenres)
  newItem.appendChild(elOverview)
  newItem.appendChild(elId)


  elList.appendChild(newItem);
}