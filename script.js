class Personnage {
    nom = " ";
    vie = 0;
    attaque = 0;
    defense = 0;
    existe = true;

    constructor(_nom) {
        if (_nom !== "") {
            this.nom = _nom;
            this.vie = Personnage.nombreAleatoire(20, 100);
            this.attaque = Personnage.nombreAleatoire(20, 100);
            this.defense = Personnage.nombreAleatoire(20, 100);
        } else {
            this.existe = false;
            console.log("Veuillez renseigner un nom");
        }
    }

    static nombreAleatoire(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    info() {
        console.log("Nom: " + this.nom + " Vie: " + this.vie + " Attaque: " + this.attaque + " Defense: " + this.defense);
    }

    attaquer(defenseur) {
        console.log("Nouvelle attaque de " + this.nom + " sur " + defenseur.nom + " !!");
        if (this.attaque > defenseur.defense) {
            defenseur.vie -= 10;
        } else if (this.attaque === defenseur.defense) {
            defenseur.vie -= 5;
        } else {
            this.vie -= 5;
        }
        this.info();
        defenseur.info();

        if (this.vie <= 0) {
            console.error("Le personnage " + this.nom + " est KO.");
            this.existe = false;
        }

        if (defenseur.vie <= 0) {
            console.error("Le personnage " + defenseur.nom + " est KO.");
            defenseur.existe = false;
        }
    }
}

class Boss {
    nom = "Sora";
    vie = 100;
    attaque = 100;
    defense = 100;
    existe = true;
}

const nbrJoueur = 2;
const players = [];

for (let i = 0; i < nbrJoueur; i++) {
    const nom = prompt("Saisissez un nom pour le joueur " + (i + 1));
    const joueur = new Personnage(nom);
    if (joueur.existe) {
        joueur.info();
        players.push(joueur);
    }
}

if (players.length === 2) {
    players[0].attaquer(players[1]);
}



players[0].vie = 5;
players[1].defense = 200;

if (players.length === 2) {
    players[0].attaquer(players[1]);
}
