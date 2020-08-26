$(document).ready(function (){


            $('.navbar-form').keyup(function (event) {
                let keycode = (event.keyCode ? event.keyCode : event.wchich);
                // recherche
                var recherche = document.getElementById('rechercheNav').value;                                              //Récupère valeur de la barre de recherche
                var albumsRecherche = new Map([...albums].filter(([cle, valeur]) => valeur.titre.includes(recherche)));     
                var lecture = "Marsupilami";
            
                
                // function prbImg(element) {
                //   // console.log(element);
                //   if (element.id === "albumMini")
                //     element.src = albumDefaultMini;
                //   else element.src = albumDefault;
                // }
            
                if(keycode == '13'){

                    //console.log(albumsRecherche); 
                    console.log(albumsRecherche);
                    
                    
                }
                else
                {
                    event.preventDefault();
                    //console.log('Test KO');
                }
            });
            




});

