function afficherliste(albums) {
  // Récupération de l'élement
  const elApp = document.getElementById("listeBD");
  elApp.innerHTML = "";
  let data = "";
  // Récupération des données
  for (let i of albums) {
    var album = albums.get(String(i[0]))
    var serie;
    var titre;
    var auteur;
    var numero;
    var prix;
    /* if (album === undefined) {
      serie = "";
			numero = "";
			titre = "";
			auteur = "";
      prix = 0;
      src = "images/noComics.jpeg"
    } else */ 
    if (album !== undefined) {

      var serie = series.get(album.idSerie);
      var auteur = auteurs.get(album.idAuteur);

      serie = serie.nom;
      titre = album.titre;
      auteur = auteur.nom;
      prix = album.prix;
      numero = album.numero

      var nomFic = serie + "-" + numero + "-" + titre;
    
      // Utilisation d'une expression régulière pour supprimer 
      // les caractères non autorisés dans les noms de fichiers : '!?.":$
      nomFic = nomFic.replace(/'|!|\?|\.|"|:|\$/g, "");

      var src = "albums/" + nomFic + ".jpg"

      data += 
      `<div class="col-sm-6 col-md-4 col-lg-3 col-xl-3">
        <div class="card produit border border-dark ">
          <img class="card-img-top" src="${src}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${titre}</h5>
            <p class="card-text" id="serie">
               Serie : ${serie} <hr>
               Numero : ${numero} <hr>
               Auteur : ${auteur} <hr>
               Prix : ${prix}€
            </p>
            <button type="button" class="btn btn-primary btn-block"><i class="fas fa-cart-plus"></i> Ajouter au panier</button>
          </div>
        </div>
      </div>`;
    }   
  }
  if (data.length > 0) {
    // Affichage des données dans le tableau
    elApp.innerHTML += data;
  } else {
    // Aucune donnée
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
/* afficherliste(albumsTriCroisssant) */

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