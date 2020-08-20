import {Client} from './client.js'
var tableClient = new Array;
tableClient[0] = new Client(1, 'Google', 'Omniscient', "2 999 000 000", '8745, Rue de l\'infini', 'Cercle', 'GAFA',"public", "0693907333");
tableClient[1] = new Client(2, 'Apple',"Electronique","245 500 000", 'New-york City',"Pomme", "GAFA", "private", "0692123456");
tableClient[2] = new Client(3, 'Microsoft',"Systeme Exploitation","9 999 999 998", 'LA',"Carré", "GAFA", "private", "0692123456");
tableClient[3] = new Client(4, 'Samsung',"Téléphonie","10 210 000", 'Même rue que Huawai et LG',"SM", "GAFA", "private", "0692123456");
tableClient[4] = new Client(5, 'Xiaomi',"Téléphonie","20 255 100", '25, Rue pavéD\'or de l\'infini',"Mi", "GAFA", "private", "0692123456");
tableClient[5] = new Client(6, 'LG',"Téléphonie","250 000", 'A coté d\'un stands de bonbon près de SamsungCorps',"LG", "GAFA", "private", "0692123456");
tableClient[6] = new Client(7, 'Amazone',"Vente en tout genre","5 000 000 ", 'Inde',"Rond", "GAFA", "private", "0692123456");
tableClient[7] = new Client(8, 'Sony',"Jeux Vidéo","155 500 000", 'Chine',"Sony", "GAFA", "private", "0692123456");
tableClient[8] = new Client(9, 'XboxCorp',"Jeux Vidéo","100 000", 'A coté de Microsoft',"X", "GAFA", "private", "0692123456");
tableClient[9] = new Client(10, 'Huawei',"Téléphonie","800 000", 'A coté de Sony',"Fleur", "GAFA", "private", "0692123456");
tableClient[10] = new Client(11, 'Huawei',"Téléphonie","800 000", 'A coté de Sony',"Fleur", "GAFA", "private", "0692123456");
tableClient[11] = new Client(12, 'Huawei',"Téléphonie","800 000", 'A coté de Sony',"Fleur", "GAFA", "private", "0692123456");
tableClient[12] = new Client(13, 'Huawei',"Téléphonie","800 000", 'A coté de Sony',"Fleur", "GAFA", "private", "0692123456");
tableClient[13] = new Client(14, 'Huawei',"Téléphonie","800 000", 'A coté de Sony',"Fleur", "GAFA", "private", "0692123456");
tableClient[14] = new Client(15, 'Huawei',"Téléphonie","800 000", 'A coté de Sony',"Fleur", "GAFA", "private", "0692123456");
tableClient[15] = new Client(16, 'Huawei',"Téléphonie","800 000", 'A coté de Sony',"Fleur", "GAFA", "private", "0692123456");
tableClient[16] = new Client(17, 'Huawei',"Téléphonie","800 000", 'A coté de Sony',"Fleur", "GAFA", "private", "0692123456");
tableClient[17] = new Client(18, 'Huawei',"Téléphonie","800 000", 'A coté de Sony',"Fleur", "GAFA", "private", "0692123456");
tableClient[18] = new Client(19, 'Huawei',"Téléphonie","800 000", 'A coté de Sony',"Fleur", "GAFA", "private", "0692123456");
tableClient[19] = new Client(20, 'Huawei',"Téléphonie","800 000", 'A coté de Sony',"Fleur", "GAFA", "private", "0692123456");
tableClient[20] = new Client(21, 'Huawei',"Téléphonie","800 000", 'A coté de Sony',"Fleur", "GAFA", "private", "0692123456");
tableClient[21] = new Client(22, 'Huawei',"Téléphonie","800 000", 'A coté de Sony',"Fleur", "GAFA", "private", "0692123456");

/**
 * M : Inserer dans un tableau html , un tableau JS
 * O : /
 * I : @param {*} contact le tableau JS
 */
function afficherliste(client) {
  // Récupération de l'élement
  const elApp = document.getElementById("listeBD");
  elApp.innerHTML = "";

  let data = "";
  // Récupération des données
  client.forEach(c => {
    data += 
    `<div class="col-sm-6 col-md-4 col-lg-3 col-xl-3">
      <div class="produit">
        <div class="bd bg-dark text-white">
          <div class="imageLivre">
          </div>
          <p>${c.getNomSociete()}</p>
        </div>
        <button type="button" class="btn btn-primary ajout">
        <i class="fas fa-cart-plus"></i></button>
      </div>
    </div>`;
  });

  if (data.length > 0) {
    // Affichage des données dans le tableau
    elApp.innerHTML += data;
  } else {
    // Aucune donnée
    elApp.innerHTML += "Aucune BD trouvée";
  }
}
// affiche le tableau de client
afficherliste(tableClient);

// rechercher un client par nom de societe
/*   document.querySelectorAll("input[type=search]")[0].addEventListener("input", function() {
    const filteredData = tableClient.filter(client =>
        client.getNomSociete().toLowerCase().includes(this.value.toLowerCase())
      );
    afficherliste(filteredData);
  }); */