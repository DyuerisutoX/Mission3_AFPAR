/**
 * @file connection.html 
 */

/**
 * Mission : Evènement ready va se produire lorsque la page aura été chargée
 * @param  {function} function anonyme 
 */
$(document).ready(function () {
  // Déclaration de variables
  var $nom = $('#nom'),
    $prenom = $('#prenom'),
    $mdp = $('#mdp'),
    $confirmation = $('#confirmation'),
    $envoi = $('#envoi'),
    $reset = $('#rafraichir'),
    $champ = $('.form-control');

  /** Mission : Gestionnaire de l'événement sur une touche relachée :
   *  Gère la couleur des champs et ecritures en fonction de la longueur de la chaine de caractères  
   *  @param  {function} function anonyme 
   */
  $champ.keyup(function () {
    // si la chaîne de caractères est inférieure à 5
    if ($(this).val().length < 4) {
      // on rend le champ rouge
      $(this).css({
        borderColor: 'red',
        color: 'red'
      });
    } else {
      // si tout est bon, on le rend vert
      $(this).css({
        borderColor: 'green',
        color: 'green'
      });
    }
  });

  /** Mission : Verifie si le champ est vide ,affiche message d'erreur et change le style css
   *  @param  {object} champ element du DOM
   */
  function verifier(champ) {
    if (champ.val() == "") {
      // On affiche le message d'erreur
      $('#message').text(" champ vide ou manquant").css({
        color: 'red'
      });
      // On rend le champ rouge
      champ.css({
        borderColor: 'red',
        color: 'red'
      });
      setTimeout(() => {
        $('#message').text("");
      }, 5000);
    } else {
      // On rend le champ vert
      champ.css({
        borderColor: 'green',
        color: 'green'
      });
    }
  }

  // Regex contenant une majuscule ,minuscule, un chiffre, un caractere spécial et longueur mdp: 8 à 15 
  mdpValide = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

  /**
   * Mission : Test la correspondance de la regex et la valeur du champ mdp puis affiche les messages en fonction
   */
  function mdpValidation() {
    if ($mdp.val().match(mdpValide)) {
      $("#mdpMessage").text("Mot de passe fort").css("color", "green");
    } else {
      $("#mdpMessage").text("le mot de passe doit contenir une majuscule ,une minuscule ,un numérique ,un caractère special et de longueur limite 8-15");
      $("#mdpMessage").css("color", "red");
    }
    setTimeout(() => {
      $('#mdpMessage').text("");
    }, 4000);
  }

   /** Mission : Gestionnaire de l'événement click : Au click du bouton submit (envoyer):
   *  Annule la fonction par défaut du bouton d'envoi puis lance la fonction de vérification sur tous les champs 
   *  @param  {Event} function e
   */
  $envoi.click(function (e) {

    e.preventDefault();
    verifier($prenom);
    verifier($nom);
    verifier($mdp);
    verifier($confirmation);

  });

  /** Mission Gestionnaire de l'événement click sur bouton recommencer : Remise a zéro du formulaire
   *  @param  {function} function anonyme
   */
  $reset.click(function () {
    $champ.css({
      borderColor: '#ccc',
      color: '#555'
    });
  });

  /** Mission : Gestionnaire de l'événement sur une touche relachée :
   *  Confirmation de la valeur du mot de passe ,rouge : différent ,vert si : OK
   * @param  {function} function anonyme
   */
  $confirmation.keyup(function () {
    // Si la confirmation est différente du mot de passe
    if ($(this).val() != $mdp.val()) {
      // on rend le champ rouge
      $(this).css({
        borderColor: 'red',
        color: 'red'
      });
    } else {
      $(this).css({
        // Si tout est bon, on le rend vert
        borderColor: 'green',
        color: 'green'
      });
    }
  });

  /**
   *  Mission : Gestionnaire de l'événement click sur bouton envoyer : Signaler les messages d'erreurs , redirection si tout est OK 
   */
  $envoi.click(function (e) {
    // Message d'erreur si le champ prénom est vide 
    if ($prenom.val() == "") {
      $('#pMessage').text("Veuillez renseignez un prénom.").css({
        color: 'red'
      });
      setTimeout(() => {
        $('#pMessage').text("");
      }, 4000);
    }

    // Message d'erreur si aucune valeur n'est entrer dansle nom
    if ($nom.val() == "") {
      $('#nMessage').text("Veuillez renseignez un nom.").css({
        color: 'red'
      });
      setTimeout(() => {
        $('#nMessage').text("");
      }, 4000);
    }

    mdpValidation();
    if (($confirmation.val().length > 0) && ($confirmation.val() == $mdp.val()) && ($prenom.val() !== "") && ($nom.val() !== "")) {
      alert("Votre enregistrement à bien été effectué");
      document.location = "connexion.html";
    } else {
      e.preventDefault();
      $('#message').text("Veuillez compléter ou vérifier les champs").css({
        color: 'red'
      });
    }
  });

});