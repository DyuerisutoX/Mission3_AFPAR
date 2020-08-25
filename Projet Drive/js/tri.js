// tri du - cher au + cher
var albumsTriCroisssant = new Map([...albums].sort(([k, v], [k2, v2])=> {
    if (parseFloat(v.prix) > parseFloat(v2.prix)) {
        return 1;
    }
    if (parseFloat(v.prix) < parseFloat(v2.prix)) {
        return -1;
    }
    return 0; 
}));
/* console.log(albumsTriCroisssant) */

// tri du + cher au - cher
var albumsTriDecroissant = new Map([...albums].sort(([cle, valeur], [cle2, valeur2])=> {
    if (parseFloat(valeur.prix) < parseFloat(valeur2.prix)) {
        return 1;
    }
    if (parseFloat(valeur.prix) > parseFloat(valeur2.prix)) {
        return -1;
    }
    return 0; 
}));
/* console.log(albumsTriDecroissant)
afficherliste(albumsTriDecroissant) */