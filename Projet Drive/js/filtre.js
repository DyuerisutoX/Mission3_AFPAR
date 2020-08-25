/* Filtre auteur */
$(document).ready(function() {
    $('.choixAuteurs').each(function () {
        $(this).on('click', afficherFiltreAuteurs )
    })
    $('.choixSeries').each(function () {
        $(this).on('click', afficherFiltreSeries )
    })
})
function afficherFiltreAuteurs() {
    const elApp = $("#listeBD");
    elApp.html("")
    let data = ""
    for (var [idAlbum, album] of albums.entries()) {
        var auteur = auteurs.get(album.idAuteur);
        if (auteur.nom == $(this).html()) {
            var nomFic = series.get(album.idSerie).nom + "-" + album.numero + "-" + album.titre;
            nomFic = nomFic.replace(/'|!|\?|\.|"|:|\$/g, "");
            var src = "albums/" + nomFic + ".jpg";
            data += ` 
            <div class="col-sm-6 col-md-6 col-lg-6 col-xl-3 mb-4 filtre">
                <div class=" shadow card h-100 ">
                <img class="card-img-top border-bottom border-primary" src="${src}" width="auto" height="500px"  alt="${album.titre}">
                <div class="card-body">
                    <h4 class="card-title">${album.titre}</h4>
                    <p class="card-text" id="serie">
                        Serie : ${series.get(album.idSerie).nom} <hr>
                        Numero : ${album.numero} <hr>
                        Auteur : ${auteur.nom} <hr>
                    </p>
                    <h4 class="prix">${album.prix} €</h4>
                    <button type="button" class="btn btn-primary ajout"><i class="fas fa-cart-plus"></i> Ajouter au panier</button>
                </div>
                </div>
            </div>
            `
        }
    }  
    if (data.length > 0) {
        elApp.html(data)
    } else {
        elApp.html("Aucune BD trouvée")
    }
}
function afficherFiltreSeries() {
    const elApp = $("#listeBD");
    elApp.html("")
    let data = ""
    for (var [idAlbum, album] of albums.entries()) {
        var serie = series.get(album.idSerie);
        if (serie.nom == $(this).html()) {
            var nomFic = series.get(album.idSerie).nom + "-" + album.numero + "-" + album.titre;
            nomFic = nomFic.replace(/'|!|\?|\.|"|:|\$/g, "");
            var src = "albums/" + nomFic + ".jpg";
            data += ` 
            <div class="col-sm-6 col-md-6 col-lg-6 col-xl-3 mb-4 filtre">
                <div class=" shadow card h-100 ">
                <img class="card-img-top border-bottom border-primary" src="${src}" width="auto" height="500px"  alt="${album.titre}">
                <div class="card-body">
                    <h4 class="card-title">${album.titre}</h4>
                    <p class="card-text" id="serie">
                        Serie : ${serie.nom} <hr>
                        Numero : ${album.numero} <hr>
                        Auteur : ${auteurs.get(album.idAuteur).nom} <hr>
                    </p>
                    <h4 class="prix">${album.prix} €</h4>
                    <button type="button" class="btn btn-primary ajout"><i class="fas fa-cart-plus"></i> Ajouter au panier</button>
                </div>
                </div>
            </div>
            `
        }
    }  
    if (data.length > 0) {
        elApp.html(data)
    } else {
        elApp.html("Aucune BD trouvée")
    }
}