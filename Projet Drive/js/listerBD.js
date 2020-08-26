


$(document).ready(function () {
  /* LISTER LES BD / LISTER LES BD PAR PAGES/LOT */
  function lister (albums) {
    var tableDonnees = new Array;
  
    for (const [cle, valeur] of albums) {
      serie = series.get(valeur.idSerie);
      var donneeAuteur = auteurs.get(valeur.idAuteur);
      var nomFic = serie.nom + "-" + valeur.numero + "-" + valeur.titre;
      nomFic = nomFic.replace(/'|!|\?|\.|"|:|\$/g, "");
      var donnees = {titre: valeur.titre, numero: valeur.numero, serie: serie.nom, auteurs: donneeAuteur.nom, prix: valeur.prix, src: `albums/${nomFic}.jpg`};
      tableDonnees.push(donnees);
    } 
    function showList(){
      const elApp = $("#listeBD");
      elApp.html("");
      let data = "";
      for( let i = first; i < first + numberOfItems;i++){
        if(i<tableDonnees.length){
          data +=
          ` 
          <div class="col-sm-6 col-md-6 col-lg-6 col-xl-3 mb-4">
            <div class=" shadow card h-100 ">
              <img class="card-img-top border-bottom border-primary" src="${tableDonnees[i].src}" width="auto" height="500px"  alt="${tableDonnees[i].titre}">
              <div class="card-body">
                  <h4 class="card-title">${tableDonnees[i].titre}</h4>
                  <p class="card-text" id="serie">
                    Serie : ${tableDonnees[i].serie} <hr>
                    Numero : ${tableDonnees[i].numero} <hr>
                    Auteur : ${tableDonnees[i].auteurs} <hr>
                  </p>
                  <h4 class="prix">${tableDonnees[i].prix} €</h4>
                  <button type="button" class="btn btn-primary ajout"><i class="fas fa-cart-plus"></i> Ajouter au panier</button>
              </div>
            </div>
          </div>
          `; 
        }
      }
      if (data.length > 0) {
        elApp.html(data);
        showPageInfo();
      } else {
        elApp.html("Aucune BD trouvée")
      }
    }
    const numberOfItems = 8
    var first = 0
    var maxPages = 67;
    var actualPage = 1
    
    showList(albums)
    activerAjoutPanier()
    
    $('.btnFirstPage').on('click',function(e) {
      e.preventDefault()
      first = 0
      actualPage = 1;
      showList();
      activerAjoutPanier()
    })
    $('.btnPrevious').on('click',function(e) {
      e.preventDefault()
      if(first-numberOfItems >= 0){
        first-=numberOfItems
        actualPage --;
        showList();
        activerAjoutPanier()
      } 
    })
    $('.btnLastPage').on('click',function(e) {
      e.preventDefault()
      first = (maxPages * numberOfItems)-numberOfItems;
      actualPage = maxPages;
      showList();
      activerAjoutPanier() 
    }) 
    $('.btnNextPage').on('click',function(e) {
      e.preventDefault()
      if(first+numberOfItems<=tableDonnees.length){
        first+=numberOfItems;
        actualPage ++;
        showList();
        activerAjoutPanier()
      }
    })
    function showPageInfo(){
      $('.pageInfo').html(`${actualPage} / ${maxPages}`)
    }
  }
  lister(albums)
  /* VOIR LE CONTENU SIMPLIFIE DU PANIER A TOUT MOMENT / AJOUTER/SUPPRIMER BD DANS PANIER*/
  var nbItemPanier = 0
  function  activerAjoutPanier() { 
    $('.ajout').each(function() {
      $(this).on('click', ajouterAuPanier)
    })
    $('.table tbody').on('click', '.btn-outline-danger', function () {
      decreaseNbItemPanier();
      $(this).closest('tr').remove();
      updateTotal()

  });
  }
  function updateNbItemPanier() {
      nbItemPanier++;
      $('.badge').each(function() {
          $(this).html(nbItemPanier)
      })
  }
  function decreaseNbItemPanier () {
    var nbItem = parseInt($(this).parent().parent().children("td:nth-child(2)").children().attr('value'))
    console.log(nbItem);
    nbItemPanier -= nbItem
    $('.badge').each(function() {
        $(this).html(nbItemPanier)
    })
  }
  function updateTotal () {
      var total = 0
      $('.prixItem').each(function() {
          var prix = $(this).html()
          prix = prix.replace(/€| /g, "");
          prix = parseFloat(prix);
          total +=prix
          /* total = total.toFixed(2) */
      })
      $('.total').html("Total : " + total + " €")


  }
  function ajoutPanier (src, prix) {
      $('.panier').append(
          `
          <tr>
              <td><img src="${src}"class="imgBD" width="50px" height="auto" alt=""></td>
              <td class="nbItem"><input type="number" disabled value="1"></td>
              <td class="prixItem">${prix} €</td>
              <td><button type="button" class="btn btn-outline-danger"><span aria-hidden="true">X</span></button></td>
          </tr>
          `
      ) 
  }
  function ajouterAuPanier () {
      // recuperation des informations
      var prix = $(this).parent().children('.prix').html();
      prix = prix.replace(/€| /g, "");
      prix = parseFloat(prix);
      prix = prix.toFixed(2)
      var src = $(this).parent().parent().children('.card-img-top').attr('src');

      if ($('.badge').html() == 0) {
          ajoutPanier(src,prix);
          updateNbItemPanier();
          updateTotal()
      } else {
          // Verification si la bd n'existe pas déja dans le panier
          var doublon = false
          $('.imgBD').each(function() {
              if ($(this).attr('src') == src)  {
                  var value = parseInt($(this).parent().parent().children("td:nth-child(2)").children().attr('value'));
                  $(this).parent().parent().children("td:nth-child(2)").children().attr('value',value + 1);
                  doublon = true;
                  updateNbItemPanier();
                  $(this).parent().parent().children(".prixItem").html(((value + 1) * prix).toFixed(2) + "€");
                  updateTotal()
              } 
          })
          if (doublon == false){
              ajoutPanier(src,prix)
              updateNbItemPanier()
              updateTotal()
          }
      }
  }

  /* FILTRER LES BD PAR AUTEURS / FILTRER LES BD PAR SERIE */
  series.forEach(value => {
    $('.filtreSeries').append(
      `<option class="choixSeries">${value.nom}</option>`
    )
  })
  
  auteurs.forEach(value => {
    $('.filtreAuteurs').append(
      `<option class="choixAuteurs">${value.nom}</option>`
  )})
  
  $('.choixAuteurs').each(function () {
    $(this).on('click', afficherFiltreAuteurs )
  })
  $('.choixSeries').each(function () {
    $(this).on('click', afficherFiltreSeries )
  })
  function afficherFiltreAuteurs () {
      const elApp = $("#listeBD");
      elApp.html("")
      let data = ""
      for (var [idAlbum, album] of albums.entries()) {
          if (auteurs.get(album.idAuteur).nom == $(this).html()) {
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
          activerAjoutPanier()
      } else {
          elApp.html("Aucune BD trouvée")
      }
  }
  function afficherFiltreSeries () {
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
        activerAjoutPanier()
    } else {
        elApp.html("Aucune BD trouvée")
    }
  }
  /* RECHERCHER UNE BD */
  $('.navbar-form').submit(function (e) { 
    e.preventDefault();
    var recherche = $('#rechercheNav').val()                                            //Récupère valeur de la barre de recherche
    var albumsRecherche = new Map([...albums].filter(([cle, valeur]) => valeur.titre.toLowerCase().includes(recherche.toLowerCase())));
    lister(albumsRecherche)
  });
/*   $('.navbar-form').keyup(function (event) {
    let keycode = (event.keyCode ? event.keyCode : event.wchich);
    // recherche
    var recherche = document.getElementById('rechercheNav').value;                                              //Récupère valeur de la barre de recherche
    var albumsRecherche = new Map([...albums].filter(([cle, valeur]) => valeur.titre.toLowerCase().includes(recherche.toLowerCase())));     
    var lecture = "Marsupilami";
    if(keycode == '13'){

        //console.log(albumsRecherche); 
        lister(albumsRecherche)
    }
    else
    {
        event.preventDefault();
        //console.log('Test KO');
    }
  }); */

})
