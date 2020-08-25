function afficherliste(albums) {
  // Récupération de l'élement
  const elApp = $("#listeBD");
  elApp.html("")
  let data = "";
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
    <div class="col-sm-6 col-md-6 col-lg-6 col-xl-3 mb-4">
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

/* afficherliste(albumsRecherche) */
series.forEach(value => {
  $('.filtreSeries').append(
    `<option class="choixSeries">${value.nom}</option>`
  )
})

auteurs.forEach(value => {
  $('.filtreAuteurs').append(
    `<option class="choixAuteurs">${value.nom}</option>`
  )
})
