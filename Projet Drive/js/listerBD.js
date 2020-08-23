function afficherliste(albums) {
  // Récupération de l'élement
  const elApp = document.getElementById("listeBD");
  elApp.innerHTML = "";
  let data = "";
  // Récupération des données
  albums.forEach(album => {
    var serie = series.get(album.idSerie);
    var auteur = auteurs.get(album.idAuteur);
    var nomFic = serie.nom + "-" + album.numero + "-" + album.titre;
    nomFic = nomFic.replace(/'|!|\?|\.|"|:|\$/g, "");
    var src = "albums/" + nomFic + ".jpg";
    data += 
    ` 
    <div class="col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-4">
      <div class="card border border-dark h-100 ">
        <img class="card-img-top" src="${src}" alt="${album.titre}">
        <div class="card-body">
          <h5 class="card-title">${album.titre}</h5>
          <p class="card-text" id="serie">
            Serie : ${serie.nom} <hr>
            Numero : ${album.numero} <hr>
            Auteur : ${auteur.nom} <hr>
            Prix : ${album.prix} €
          </p>
          <button type="button" class="btn btn-primary btn-block"><i class="fas fa-cart-plus"></i> Ajouter au panier</button>
        </div>
      </div>
    </div>
    `;
  })
  if (data.length > 0) {
    elApp.innerHTML += data;
  } else {
    elApp.innerHTML += "Aucune BD trouvée";
  }
}
// affiche la liste de tout les bd
afficherliste(albums)

// tri du - cher au + cher
var albumsTriCroisssant = new Map([...albums].sort(([k, v], [k2, v2])=> {
  if (parseFloat(v.prix) > parseFloat(v2.prix)) {
    return 1;
  }
  if (parseFloat(v.prix) < parseFloat(v2.prix)) {
    return -1;
  }
  return 0; 
}));
/* console.log(albumsTriCroisssant) */

// tri du + cher au - cher
var albumsTriDecroissant = new Map([...albums].sort(([cle, valeur], [cle2, valeur2])=> {
  if (parseFloat(valeur.prix) < parseFloat(valeur2.prix)) {
    return 1;
  }
  if (parseFloat(valeur.prix) > parseFloat(valeur2.prix)) {
    return -1;
  }
  return 0; 
}));
/* console.log(albumsTriDecroissant) */

// recherche
var recherche = "x"
var albumsRecherche = new Map([...albums].filter(([cle, valeur]) => valeur.titre.includes(recherche)))
/* console.log(albumsRecherche) */

// rechercher un client par nom de societe
/*   document.querySelectorAll("input[type=search]")[0].addEventListener("input", function() {
    const filteredData = tableClient.filter(client =>
        client.getNomSociete().toLowerCase().includes(this.value.toLowerCase())
      );
    afficherliste(filteredData);
  }); */

{/* <div class="col-sm-6 col-md-4 col-lg-3 col-xl-3">
  <div class="produit">
    <div class="bd bg-dark text-white">
      <div id="imageLivre">
        <p id="serie">${serie}</p>
        <p id="numero">${numero}</p>
        <p id="titre">${titre}</p>
        <p id="auteur">${auteur}</p>
        <p id="prix">${prix}€</p>
        <img class="img-fluid" src="albums/${nomFic}.jpg">
        <img class="img-fluid" src="albumsMini/${nomFic}.jpg>
      </div>
    </div>
    <button type="button" class="btn btn-primary ajout">
    <i class="fas fa-cart-plus"></i></button>
  </div>
</div> */}

/* function prbImg(element) {
  // console.log(element);
  if (element.id === "albumMini")
    element.src = albumDefaultMini;
  else element.src = albumDefault;

} */