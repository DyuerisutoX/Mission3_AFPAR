/**
 * @file index.html 
 */

var connection = $('#connection');
var login = $('#login');
var mdp = $('#mdp');
var tentatives = 3;

//Expression régulière de login, la 1ère lettre doit être une majuscule
var login_v = /[A-Z][A-Za-z' -]+/;
/**
 * Mission : Evènement ready va se produire lorsque la page aura été chargée
 * @param  {object} document
 * @param  {function} function
 */
$(document).ready(function () {

  $('.form-control').keyup(function () {
     // si la chaîne de caractères est inférieure à 5
    if ($(this).val().length < 4) {
      $(this).css({ // on rend le champ rouge
        borderColor: 'red',
        color: 'red'
      });
    } else {
      $(this).css({ // si tout est bon, on le rend vert
        borderColor: 'green',
        color: 'green'
      });
    }
  });

  /** Mission : Gestionnaire de l'événement click du bouton connection :
   * Gestion des styles css et messages d'erreurs
   *  @param  {function} function 
   */
  connection.click(function (e) {
    //Si aucune valeur n'est entrer dans utilisateur
    if (login.val() == "") {
      $('#logMessage').text("Veuillez renseignez un nom.").css({
        color: 'red'
      });
      login.css({ // on rend le champ rouge
        borderColor: 'red',
      });
      setTimeout(() => {
        $('#logMessage').text("");
      }, 4000);
    }

    //Si aucune valeur n'est entrer dans mot de passe
    else if (mdp.val() == "") {
      $('#passMessage').text("Veuillez complétez le mot de passe.").css({
        color: 'red'
      });
      //on rend le champ rouge
      mdp.css({ 
        borderColor: 'red',
      });
      setTimeout(() => {
        $('#passMessage').text("");
      }, 4000);
    } else {
      
      //Test du format de login 
      if (login_v.test(login.val()) == false) {
        $('#logMessage').text("Format identifiant incorrect Veuillez commencer par une majuscule").css({
          color: 'red'
        });
        setTimeout(() => {
          $('#logMessage').text("");
        }, 4000);
      } else {

        //Si l'utilisateur ou le mot de passe est incorrect
        if (login.val() !== 'Destiny' || mdp.val() !== 'destin') {
          //On réduit le nombre de tentatives
          tentatives--;
          $('#passMessage').text("Erreur, identifiant ou mot de passe incorrect.Il vous reste " + tentatives + " essai(s).").css({
            color: 'red'
          });
          setTimeout(() => {
            $('#passMessage').text("");
          }, 4000);
        }

        //Si tout est ok, redirection vers la page Accueil
        else {
          document.location = "index.html";
        }
      }

      //Si nbre de tentatives atteint 0, Le bouton connexion est supprimé
      if (tentatives == 0) {
        e.preventDefault(); // on annule la fonction par défaut du bouton d'envoi
        $('#passMessage').hide();
        $('#message').text("Vous avez trop fait d'erreur Veuillez rafraichir la page").css({
          color: 'red'
        });
      }
    }
  });
});