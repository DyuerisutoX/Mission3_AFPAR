/**
 * M: Permet la création d'un client avec des données spécifique 
 * O: /
 * I: @return NULL
 * */ 
export class Client {
    constructor(numClient, nomSociete,domaineActivite, chiffreAffaire, adresse, complement, raisonSociale, typeClient, telephone) {
        var numClient = numClient;
        var nomSociete = nomSociete;
        var domaineActivite = domaineActivite;
        var chiffreAffaire = chiffreAffaire;
        var adresse = adresse;
        var complement = complement;
        var raisonSociale = raisonSociale;
        var typeClient = typeClient;
        var telephone = telephone;
        
        this.getNumClient = function () {
            return numClient;
        }
        this.getNomSociete = function () {
            return nomSociete;
        }
        this.getDomaineActivite = function ()  {
            return domaineActivite;
        }
        this.getChiffreAffaire = function ()  {
            return chiffreAffaire;
        }
        this.getAdresse = function ()  {
            return adresse;
        }
        this.getComplement = function ()  {
            return complement;
        }
        this.getRaisonSociale = function ()  {
            return raisonSociale;
        }
        this.getTelephone = function ()  {
            return telephone;
        }
        this.getCommentaire = function ()  {
            return commentaire;
        }

        this.setNomSociete = function (nomSociete) {
            nomSociete = nomSociete;
        }
        this.setDomaineActivite = function (domaineActiv)  {
            domaineActiv = domaineActivite;
        }
        this.setChiffreAffaire = function (chiffreAff)  {
            chiffreAff = chiffreAffaire;
        }
        this.setAdresse = function (adress)  {
            adress = adresse;
        }
        this.setComplement = function (cmplt)  {
            cmplt = complement;
        }
        this.setRaisonSociale = function (rSociale)  {
            rSociale = raisonSociale;
        }
        this.setTelephone = function (tel)  {
            tel = telephone;
        }
        this.setCommentaire = function (comm)  {
            comm = commentaire;
        }
    }

}