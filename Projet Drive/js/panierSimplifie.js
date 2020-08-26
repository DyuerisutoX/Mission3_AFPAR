
$(document).ready(function () { 
    var nbItemPanier = 0
    $('.ajout').each(function() {
        $(this).on('click',function() {

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
        })
    })
    function updateNbItemPanier() {
        nbItemPanier++;
        $('.badge').each(function() {
            $(this).html(nbItemPanier)
        })
    }

    function decreaseNbItemPanier(){
        nbItemPanier--;
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
    function ajoutPanier(src, prix) {
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

        //Suprime le produit de la liste
        $('.table tbody').on('click', '.btn-outline-danger', function () {
            $(this).closest('tr').remove();
            decreaseNbItemPanier();
    
        });
    
})
