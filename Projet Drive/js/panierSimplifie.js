
$(document).ready(function () {
    // ajout Panier
    $('.ajout').each(function() {
        $(this).on('click',function() {
            var prix = $(this).parent().children('.prix').html()
            var src = $(this).parent().parent().children('.card-img-top').attr('src')
            var titre = $(this).parent().children('.card-title').html()
            $('.panier').append(
                `
                <tr>
                    <td><img src="${src}" width="50px" height="auto" alt=""></td>
                    <td><input type="number" disabled value="1"></td>
                    <td>${prix}</td>
                </tr>
                `
            )
        })
    })
})
