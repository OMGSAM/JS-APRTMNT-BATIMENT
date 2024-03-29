class Appartement extends Batiment {
    constructor(adresse, prix, superficie, numeroEtage, nbChambres) {
        super(adresse, prix, superficie);
        this.numeroEtage = numeroEtage;
        this.nbChambres = nbChambres;
    }

    getNumeroEtage() {
        return this.numeroEtage;
    }

    getNbChambres() {
        return this.nbChambres;
    }

    setNumeroEtage(numeroEtage) {
        if (numeroEtage > 0) {
            this.numeroEtage = numeroEtage;
        } else {
            console.error("Le numéro d'étage doit être > ou 1");
        }
    }

    setNbChambres(nbChambres) {
        if (nbChambres > 0) {
            this.nbChambres = nbChambres;
        } else {
            console.error("Le nombre de chambres doit être > ou 1");
        }
    }

    afficher() {
        super.afficher();
        console.log(`Numéro d'étage: ${this.numeroEtage}`);
        console.log(`Nombre de chambres: ${this.nbChambres}`);
    }
}
