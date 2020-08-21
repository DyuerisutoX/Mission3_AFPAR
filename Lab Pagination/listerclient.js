
// simulation table Client
import {tableClient} from './table.js'

/**
 * M : Inserer dans un tableau html , un tableau JS
 * O : /
 * I : @param {*} contact le tableau JS
 */
function afficherliste(client) {
  // Récupération de l'élement
  const elApp = document.getElementsByClassName("tableClient")[0];
  elApp.innerHTML = "";

  let data = "";
  // Récupération des données
  client.forEach(c => {
    data += 
    `<tr>
      <td>${c.getNumClient()}</td>
      <td>${c.getNomSociete()}</td>
      <td>${c.getAdresse()}</td>
      <td>${c.getTelephone()}</td>
      <td>
        <a href="DetailsClient.html">
          <button value="${c.getNumClient()}" class="boutonDetail"><i class="fa fa-search" aria-hidden="true"></i></button> 
        </a>
          <button value="${c.getNumClient()}" class="boutonDetail"><i class="fa fa-search" aria-hidden="true"></i></button>
      </td>
    </tr>`;
  });

  if (data.length > 0) {
    // Affichage des données dans le tableau
    elApp.innerHTML += data;
  } else {
    // Aucune donnée
    elApp.innerHTML += "Aucune ligne trouvée";
  }
}
// affiche le tableau de client
afficherliste(tableClient);

// rechercher un client par nom de societe
  document.querySelectorAll("input[type=search]")[0].addEventListener("input", function() {
    const filteredData = tableClient.filter(client =>
        client.getNomSociete().toLowerCase().includes(this.value.toLowerCase())
      );
    afficherliste(filteredData);
  });