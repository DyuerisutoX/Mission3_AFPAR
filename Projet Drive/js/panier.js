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
    $('.table tbody ').on('click', '.qtyplus', function () {
        

    
        let incrementation = parseInt($('.qty').attr('value'));
        qntAugmen = incrementation + ajout;
        $('.qty').attr('value', qntAugmen);
        

        // $(this).closest('tr').qntAugmenter();
        
    });

        

    

    $('.table tbody').on('click', '.qtyminus', function () {

        qntActuelle = parseInt($('.qty').attr('value'));

        if (qntActuelle > 1)
        {
            let decrementation = parseInt($('.qty').attr('value'));
            qntDiminuer = decrementation - reduction;
            $('.qty').attr('value', qntDiminuer);
        }
                  

        
    });


})

// function qntAugmenter() 
// {
//     let incrementation = parseInt($('.qty').attr('value'));
//     qntAugmen = incrementation + ajout;
//     $('.qty').attr('value', qntAugmen);

// }