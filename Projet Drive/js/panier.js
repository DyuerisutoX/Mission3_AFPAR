$(document).ready(function (){


    let ajout = 1;      //Va permettre d'augmenter nos champs quantités
    let reduction = 1;  //Va permettre de diminuer nos champs quantités

    let prixBD1 = parseFloat($('#priceUniBD1').text());     //Récupère le prix de la 1ère BD
    let prixBD2 = parseFloat($('#priceUniBD2').text());     //Prix BD2
    let prixBD3 = parseFloat($('#priceUniBD3').text());     //...BD3
    let prixBD4 = parseFloat($('#priceUniBD4').text());     //...BD4

    let prixTotal = prixBD1 + prixBD2 + prixBD3 + prixBD4;  //Prix Total des BD

    $('#totalBD1').text(prixBD1 + '€');                     //Prix Total de la BD1
    $('#totalBD2').text(prixBD2 + '€');                     //Prix Total BD2
    $('#totalBD3').text(prixBD3 + '€');                     //...BD3
    $('#totalBD4').text(prixBD4 + '€');                     //...BD4
    
    $('#totalAchat').text((prixTotal) + '€')



    //Suprime le produit de la liste
    $('.table tbody').on('click', '.btn', function () {
        updateTotal();
        $(this).closest('tr').remove();

        
        //console.log(prixSoustrait);

    });

    //Suprime tous les produits
    $('.fa-trash').click(function () {
        $('tbody').remove();
    });

    //Augmente la quantité
    $('.table tbody ').on('click', '.plusBD1', function () {
    
        let valueBD = parseInt($('.BD1').attr('value'));    //Récupère la valeur de l'attribut "value" de l'input
        let bd1Augment = valueBD + ajout;                   //Permet d''augmenter la quantité
        $('.BD1').attr('value', bd1Augment);                //Change la valeur de l'attribut "value" de l'input

        //Calcul prix de la BD
        $('#totalBD1').text((prixBD1 * bd1Augment) + '€');  //Affiche le prix total de la 1ère BD

        //Calcul Total des BD
        prixTotal = prixTotal + prixBD1;                    //Augment le prix total de toutes les BD
        $('#totalAchat').text((prixTotal) + '€');           //Affiche le prix total de toutes les BD
                
    });

    //2ème BD
    $('.table tbody ').on('click', '.plusBD2', function () {
        valueBD = parseInt($('.BD2').attr('value'));
        let bd2Augment = valueBD + ajout;
        $('.BD2').attr('value', bd2Augment);

        $('#totalBD2').text((prixBD2 * bd2Augment) + '€');

        prixTotal = prixTotal + prixBD2;
        $('#totalAchat').text((prixTotal) + '€');
                
    });

    //3ème BD
    $('.table tbody ').on('click', '.plusBD3', function () {

        valueBD = parseInt($('.BD3').attr('value'));
        let bd3Augment = valueBD + ajout;
        $('.BD3').attr('value', bd3Augment);

        $('#totalBD3').text((prixBD3 * bd3Augment) + '€');

        prixTotal = prixTotal + prixBD3;
        $('#totalAchat').text((prixTotal) + '€');
                
    });

    //4ème BD
    $('.table tbody ').on('click', '.plusBD4', function () {

        valueBD = parseInt($('.BD4').attr('value'));
        let bd4Augment = valueBD + ajout;
        $('.BD4').attr('value', bd4Augment);

        $('#totalBD4').text((prixBD4 * bd4Augment) + '€');

        
        console.log('Valeur prixTotal.....(' + prixTotal + ')');
        prixTotal = prixTotal + prixBD4;
        console.log('Valeur prixTotal.....(' + prixTotal + ')');
        $('#totalAchat').text((prixTotal) + '€');
                
    });


    //Supprime la quantité
    $('.table tbody').on('click', '.minusBD1', function () {     
        
        valueBD = parseInt($('.BD1').attr('value'));        //Quantité actuelle de la 1ère BD

        if (valueBD > 1)                                    //1 BD au minimum
        {          
            let bd1Dimin = valueBD - reduction;             //Permet de diminuer la quantité
            $('.BD1').attr('value', bd1Dimin);              //Stocke la valeur de l'attribut "value" de l'input

            //Calcul prix BD
            $('#totalBD1').text((prixBD1 * bd1Dimin) + '€');

            //Calcul Total BD
            prixTotal = prixTotal - prixBD1;                //Réduit le prix total des BD
            $('#totalAchat').text((prixTotal) + '€');       //Affiche le prix total des BD
            }
                  
    });

    $('.table tbody').on('click', '.minusBD2', function () {     
        
        valueBD = parseInt($('.BD2').attr('value'));

        if (valueBD > 1)
        {          
            let bd2Dimin = valueBD - reduction;
            $('.BD2').attr('value', bd2Dimin);

            $('#totalBD2').text((prixBD2 * bd2Dimin) + '€');

            prixTotal = prixTotal - prixBD2;
            $('#totalAchat').text((prixTotal) + '€');
        }
                  
    });

    $('.table tbody').on('click', '.minusBD3', function () {     
        
        valueBD = parseInt($('.BD3').attr('value'));

        if (valueBD > 1)
        {          
            let bd3Dimin = valueBD - reduction;
            $('.BD3').attr('value', bd3Dimin);

            $('#totalBD3').text((prixBD3 * bd3Dimin) + '€');

            prixTotal = prixTotal - prixBD3;
            $('#totalAchat').text((prixTotal) + '€');
        }
                  
    });

    $('.table tbody').on('click', '.minusBD4', function () {     
        
        valueBD = parseInt($('.BD4').attr('value'));

        if (valueBD > 1)
        {          
            let bd4Dimin = valueBD - reduction;
            $('.BD4').attr('value', bd4Dimin);

            $('#totalBD4').text((prixBD4 * bd4Dimin) + '€');

            prixTotal = prixTotal - prixBD4;
            $('#totalAchat').text((prixTotal) + '€');
        }
                  
    });

    //Bloque les saises des input dans la liste
    $('.table tbody').keypress(function (event) {
        let keycode = (event.keyCode ? event.keyCode : event.wchich);
        if(keycode = '13'){
            event.preventDefault();
        }
    })

    //Message paiement prochainement
    $('#actionValidation').click(function () {
        let message = "Prochainement sur cet ecran, le paiement";
        $('#message').css({'color': 'orange'}).text(message);
    })

    function updateTotal()
    {
        prixSoustrait = document.getElementsByClassName('total');
        console.log(prixSoustrait.innerText);
    }


})

