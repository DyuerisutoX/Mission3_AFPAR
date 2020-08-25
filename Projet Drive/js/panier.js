$(document).ready(function (){


    let ajout = 1;
    let reduction = 1;


    //Suprime le produit de la liste
    $('.table tbody').on('click', '.btn', function () {
        $(this).closest('tr').remove();

    });

    //Suprime tous les produits
    $('.fa-trash').click(function () {
        $('tbody').remove();
    });

    //Augmente la quantité
    $('.table tbody ').on('click', '.plusBD1', function () {
    
        let valueBD = parseInt($('.BD1').attr('value'));
        let bd1Augment = valueBD + ajout;
        $('.BD1').attr('value', bd1Augment);
                
    });

    $('.table tbody ').on('click', '.plusBD2', function () {
        valueBD = parseInt($('.BD2').attr('value'));
        let bd2Augment = valueBD + ajout;
        $('.BD2').attr('value', bd2Augment);
                
    });

    $('.table tbody ').on('click', '.plusBD3', function () {
        valueBD = parseInt($('.BD3').attr('value'));
        let bd3Augment = valueBD + ajout;
        $('.BD3').attr('value', bd3Augment);
                
    });

    $('.table tbody ').on('click', '.plusBD4', function () {
        valueBD = parseInt($('.BD4').attr('value'));
        let bd4Augment = valueBD + ajout;
        $('.BD4').attr('value', bd4Augment);
                
    });


    //Supprime la quantité
    $('.table tbody').on('click', '.minusBD1', function () {     
        
        valueBD = parseInt($('.BD1').attr('value'));

        if (valueBD > 1)
        {          
            let bd1Dimin = valueBD - reduction;
            $('.BD1').attr('value', bd1Dimin);
        }
                  
    });

    $('.table tbody').on('click', '.minusBD2', function () {     
        
        valueBD = parseInt($('.BD2').attr('value'));

        if (valueBD > 1)
        {          
            let bd2Dimin = valueBD - reduction;
            $('.BD2').attr('value', bd2Dimin);
        }
                  
    });

    $('.table tbody').on('click', '.minusBD3', function () {     
        
        valueBD = parseInt($('.BD3').attr('value'));

        if (valueBD > 1)
        {          
            let bd3Dimin = valueBD - reduction;
            $('.BD3').attr('value', bd3Dimin);
        }
                  
    });

    $('.table tbody').on('click', '.minusBD4', function () {     
        
        valueBD = parseInt($('.BD4').attr('value'));

        if (valueBD > 1)
        {          
            let bd4Dimin = valueBD - reduction;
            $('.BD4').attr('value', bd4Dimin);
        }
                  
    });

    //Bloque les saises des input dans la liste
    $('.table tbody').keypress(function (event) {
        let keycode = (event.keyCode ? event.keyCode : event.wchich);
        if(keycode = '13'){
            event.preventDefault();
        }
    })


})
