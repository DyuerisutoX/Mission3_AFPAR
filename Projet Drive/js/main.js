


$(document).ready(function () {
  /* LISTER LES BD PAR PAGES / LOT -----------------------------------------------------------------*/
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
      for( let i = first ; i < first + numberOfItems ; i++){
        if(i < tableDonnees.length){
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
    var maxPages = Math.ceil(tableDonnees.length / numberOfItems);
    var actualPage = 1
    
    showList(albums)
    activerAjoutPanier()
    
    $('.btnFirstPage').on('click',function(e) {
      e.preventDefault()
      first = 0
      actualPage = 1;
      showList();
      activerAjoutPanier()
      window.scrollTo(0,0)
    })
    $('.btnPrevious').on('click',function(e) {
      e.preventDefault()
      if(first-numberOfItems >= 0){
        first-=numberOfItems
        actualPage --;
        showList();
        activerAjoutPanier()
        window.scrollTo(0,0)
      } 
    })
    $('.btnLastPage').on('click',function(e) {
      e.preventDefault()
      first = (maxPages * numberOfItems)-numberOfItems;
      actualPage = maxPages;
      showList();
      activerAjoutPanier() 
      window.scrollTo(0,0)
    }) 
    $('.btnNextPage').on('click',function(e) {
      e.preventDefault()
      if(first+numberOfItems<=tableDonnees.length){
        first+=numberOfItems;
        actualPage ++;
        showList();
        activerAjoutPanier()
        window.scrollTo(0,0)
      }
    })
    function showPageInfo(){
      $('.pageInfo').html(`${actualPage} / ${maxPages}`)
    }
  }

  lister(albums)
  /* AJOUTER / SUPPRIMER BD DANS PANIER ------------------------------------------------------------*/
  var nbItemPanier = 0
  function  activerAjoutPanier() { 
    $('.ajout').each(function() {
      $(this).on('click', ajouterAuPanier)
    })
    $('.table tbody').on('click', '.btn-danger', function () {
      var nbItem = $(this).parent().parent().children('td:nth-child(2)').children().val()
      nbItemPanier -= nbItem
      $('.badge').each(function() {
        $(this).html(nbItemPanier)
      })
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
              <td><button type="button" class="btn btn-danger"><i class="fas fa-times"></i></button></td>
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

  /* FILTRER LES BD PAR AUTEURS ---------------------------------------------------------------------*/
  auteurs.forEach(value => {
    $('.filtreAuteurs').append(
      `<option class="choixAuteurs">${value.nom}</option>`
  )})
  $('.choixAuteurs').each(function () {
    $(this).on('click',function() {
      var albumfiltreAuteurs = new Map([...albums].filter(([cle, valeur]) => auteurs.get(valeur.idAuteur).nom == $(this).html()));
      lister(albumfiltreAuteurs)
    } )
  })

  /* FILTRER LES BD PAR SERIES -----------------------------------------------------------------------*/
  series.forEach(value => {
    $('.filtreSeries').append(
      `<option class="choixSeries">${value.nom}</option>`
    )
  })
  $('.choixSeries').each(function () {
    $(this).on('click', function () {
      var albumfiltreSeries = new Map([...albums].filter(([cle, valeur]) => series.get(valeur.idSerie).nom == $(this).html()));
      lister(albumfiltreSeries)
    } )

  })

  /* RECHERCHER UNE BD --------------------------------------------------------------------------------*/
  $('.navbar-form').submit(function (e) { 
    e.preventDefault();
    var recherche = $('#rechercheNav').val()                                            //Récupère valeur de la barre de recherche
    var albumsRecherche = new Map([...albums].filter(([cle, valeur]) => valeur.titre.toLowerCase().includes(recherche.toLowerCase())));
    lister(albumsRecherche)
  });

  /* TRIER LES BD -------------------------------------------------------------------------------------*/
  $('.tri').each(function() {
    $(this).on('click', function () {
      var albumsTri;
      switch ($(this).val()) {
        case "0":
          albumsTri = new Map([...albums].sort(([cle, valeur], [cle2, valeur2])=> {
            if (valeur.titre > valeur2.titre) {
              return 1;
            }
            if (valeur.titre < valeur2.titre) {
              return -1;
            }
            return 0; 
          }))
          lister(albumsTri)
          break;
        case "1":
          albumsTri =  new Map([...albums].sort(([cle, valeur], [cle2, valeur2])=> {
            if (parseFloat(valeur.prix) > parseFloat(valeur2.prix)) {
                return 1;
            }
            if (parseFloat(valeur.prix) < parseFloat(valeur2.prix)) {
                return -1;
            }
            return 0; 
          }));
          lister(albumsTri)
          break;
        case "2":
          albumsTri = new Map([...albums].sort(([cle, valeur], [cle2, valeur2])=> {
            if (parseFloat(valeur.prix) < parseFloat(valeur2.prix)) {
                return 1;
            }
            if (parseFloat(valeur.prix) > parseFloat(valeur2.prix)) {
                return -1;
            }
            return 0;
          }));
          lister(albumsTri)
          break;
      }
    })
  })
})
