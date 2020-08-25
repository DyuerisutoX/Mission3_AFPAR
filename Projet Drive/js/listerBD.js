function afficherliste(albums) {
  // Récupération de l'élement
  const elApp = $("#listeBD");
  elApp.html("")
  let data = "";
  console.log()
  var prixMax = parseFloat(albums.values().next().value.prix);
  var prixMin = prixMax
  // Récupération des données
  albums.forEach(album => {
    var serie = series.get(album.idSerie);
    var auteur = auteurs.get(album.idAuteur);
    var nomFic = serie.nom + "-" + album.numero + "-" + album.titre;
    nomFic = nomFic.replace(/'|!|\?|\.|"|:|\$/g, "");
    if (parseFloat(album.prix) > prixMax) {
      prixMax = parseFloat(album.prix)
    } else if (parseFloat(album.prix) < prixMin) {
      prixMin = parseFloat(album.prix)
    }
    var src = "albums/" + nomFic + ".jpg";
    data += 
    ` 
    <div class="col-sm-6 col-lg-4 col-xl-3 mb-4">
      <div class=" shadow card h-100 ">
        <img class="card-img-top border-bottom border-primary" src="${src}" width="auto" height="500px"  alt="${album.titre}">
        <div class="card-body">
            <h4 class="card-title">${album.titre}</h4>
            <p class="card-text" id="serie">
              Serie : ${serie.nom} <hr>
              Numero : ${album.numero} <hr>
              Auteur : ${auteur.nom} <hr>
            </p>
            <h4 class="prix">${album.prix} €</h4>
            <button type="button" class="btn btn-primary ajout"><i class="fas fa-cart-plus"></i> Ajouter au panier</button>
        </div>
      </div>
    </div>
    `;
  })
  if (data.length > 0) {
    elApp.html(data)
    $("#resellerEarnings").html(prixMin + " €")
    $("#clientPrice").html(prixMax + " €")
  } else {
    elApp.html("Aucune BD trouvée")
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
/* console.log(albumsTriDecroissant)
afficherliste(albumsTriDecroissant) */

// recherche
var recherche = "Marsupilami"
var albumsRecherche = new Map([...albums].filter(([cle, valeur]) => valeur.titre.includes(recherche)))
/* console.log(albumsRecherche); */