import {tableClient} from './table.js'
let numberOfItems = 10
var first = 0
var maxPages = Math.ceil(tableClient.length / numberOfItems );
var actualPage = 1

function showList(){
    let tableList = "";
    for( let i = first; i < first + numberOfItems;i++){
      if(i<tableClient.length){
        tableList += `
        <tr>
          <td>${tableClient[i].getNumClient()}</td>
          <td>${tableClient[i].getNomSociete()}</td>
          <td>${tableClient[i].getAdresse()}</td>
          <td>${tableClient[i].getTelephone()}</td>
          <td>
            <button value="${tableClient[i].getNumClient()}" class="btn"><i class="fa fa-eye" aria-hidden="true"></i>
            </button> 
            <button value="${tableClient[i].getNumClient()}" class="btn"><i class="fa fa-trash" aria-hidden="true"></i>
            </button> 
          </td>
        </tr>
      `  
      }
    }
    document.getElementById('tableClient').innerHTML=tableList;
    showPageInfo();
}
showList()

document.getElementById("btnFirstPage").addEventListener("click", function () {
  first = 0
  actualPage = 1;
  showList();
})
document.getElementById("btnPrevious").addEventListener("click", function() {
  if(first-numberOfItems >= 0){
    first-=numberOfItems
    actualPage --;
    showList();
  } 
})
document.getElementById("btnLastPage").addEventListener("click", function () {
  first = (maxPages * numberOfItems)-numberOfItems;
  actualPage = maxPages;
  showList(); 
})
document.getElementById("btnNextPage").addEventListener("click", function () {
  if(first+numberOfItems<=tableClient.length){
    first+=numberOfItems;
    actualPage ++;
    showList();
  }
})
function showPageInfo(){
  document.getElementById('pageInfo').innerHTML = 
  `Page ${actualPage} / ${maxPages}`
}

/* document.querySelectorAll("input[type=search]")[0].addEventListener("input", function() {
  var choix = tableClient.filter(client =>
    client.getNomSociete().toLowerCase().includes(document.querySelectorAll("input[type=search]")[0].value.toLowerCase())
  );;
  function showListFiltered() {
    var tableList = "";
    for( let i = first; i < first + numberOfItems;i++){
      if(i<choix.length){
        tableList += `
        <tr>
          <td>${choix[i].getNumClient()}</td>
          <td>${choix[i].getNomSociete()}</td>
          <td>${choix[i].getAdresse()}</td>
          <td>${choix[i].getTelephone()}</td>
          <td><a href="DetailsClient.html"><button value="${choix[i].getNumClient()}" class="btn"><i class="fa fa-search" aria-hidden="true"></i></button> </a></td>
        </tr>
      `  
      }
    }
    if (tableList.length > 0) {
      // Affichage des données dans le tableau
      document.getElementById('tableClient').innerHTML = tableList
    } else {
      // Aucune donnée
      document.getElementById('tableClient').innerHTML = "Aucune ligne trouvée";
    }
  } 
  showListFiltered()
  document.getElementById("zonePagination").style.display = "none"
  if (document.querySelectorAll("input[type=search]")[0].value == "") {
    document.getElementById("zonePagination").style.display = "block"
  }
}); */
document.querySelectorAll("input[type=search]")[0].addEventListener("input",function() {
  var choix = "";
  switch (document.getElementById("inputState").value) {
    case "Par identifiant":
      choix = tableClient.filter(client =>
        client.getNumClient() == (document.querySelectorAll("input[type=search]")[0].value))
      break;
    case "Par nom de societe":
      choix = tableClient.filter(client =>
        client.getNomSociete().toLowerCase().includes(document.querySelectorAll("input[type=search]")[0].value.toLowerCase()))
      break;
    case "Par adresse":
      choix = tableClient.filter(client =>
        client.getAdresse().toLowerCase().includes(document.querySelectorAll("input[type=search]")[0].value.toLowerCase()))
      break;
    case "Par télephone":
      choix = tableClient.filter(client =>
        client.getTelephone() == (document.querySelectorAll("input[type=search]")[0].value))
      break;
  }
  function showListFiltered() {
    var tableList = "";
    for( let i = first; i < first + numberOfItems;i++){
      if(i<choix.length){
        tableList += `
        <tr>
          <td>${choix[i].getNumClient()}</td>
          <td>${choix[i].getNomSociete()}</td>
          <td>${choix[i].getAdresse()}</td>
          <td>${choix[i].getTelephone()}</td>
          <td>
            <button value="${choix[i].getNumClient()}" class="btn"><i class="fa fa-eye" aria-hidden="true"></i>
            </button> 
            <button value="${choix[i].getNumClient()}" class="btn"><i class="fa fa-trash" aria-hidden="true"></i>
            </button> 
          </td>
        </tr>
      `  
      }
    }
    if (tableList.length > 0) {
      // Affichage des données dans le tableau
      document.getElementById('tableClient').innerHTML = tableList
    } else {
      // Aucune donnée
      document.getElementById('tableClient').innerHTML = "Aucune ligne trouvée";
    }
  } 
  first = 0
  actualPage = 1;
  showListFiltered()
  document.getElementById("zonePagination").style.display = "none"
  if (document.querySelectorAll("input[type=search]")[0].value == "") {
    document.getElementById("zonePagination").style.display = "block"
    showList()
  }
})
