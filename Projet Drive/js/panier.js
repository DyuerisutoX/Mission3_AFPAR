$(document).ready(function (){
    //Suprime le produit de la liste
    $('.table tbody').on('click', '.btn', function () {
        $(this).closest('tr').remove();

    });

    //Suprime tous les produits
    $('.fa-trash').click(function () {
        $('tbody').remove();
    });

    // $('.table tbody').on('click', '.qtyplus', function () {

    //     $(this).closest('.qty').css({"backgroung-color": "blue"});

    //     // let qnt = document.getElementsByClassName('qty');
    //     // test = qnt;
    //     // console.log(test);

    //     // qnt = $(this).closest('input').getElementsByClassName('qty');
    //     // qnt = document.getElementsByClassName('qty');
    //     // console.log($(this).closest('input'));
    //     // console.log(qnt.value)
    //     // console.log(parseInt(qnt[0].value) + 1);
    //     // $(this).closest('input').remove('input' + 1);
        

    // });

    // let price = document.getElementsByClassName('price');
    // let qnt = document.getElementsByClassName('qty');
    // let total = price[0];

    // console.log(price[0].innerText);
    // console.log(qnt);
    // console.log(total);
    


})