// L'instruction autrement dit, statements sont séparées par des points virgules
// La bonne pratique est d'inclure un point-virgule après chaque instruction
// Ici, on déclare une constante (la valeur d'une constante ne peut pas être modifiée par des réaffectations ultérieures.)
/*
const MotRéférent = "Phantom";
let MotUtilisateur = prompt("Entrez le mot : " + MotRéférent);

if (MotUtilisateur === MotRéférent) 
{
    console.log("Bravo!");
}
else
{
    console.log("Vous avez fait une erreur de frappe.");
}
*/


// Ici, nous voulons empêcher l’utilisateur d’écrire des insultes, comme par exemple “Con”, “Merde” ou encore “Putain”, tout en contrôlant si le mot correspond

/*
switch (MotUtilisateur) 
{
    case MotRéférent:
        console.log("Bravo !");
        break;
    case "Con":
        console.log("Restez correct !");
        break;
    case "Merde":
        console.log("Restez correct !");
        break;
    case "Putain":
        console.log("Soyez gentil !");
        break;
    default:
        console.log("Vous avez fait une erreur de frappe.");
}
*/

// On déclare un tableau
const listeMots = ["Phantom", "Rose", "Sapin"];
const listePhrases = ["Pas de panique !", "La vie, l’univers et le reste", "Merci pour le poisson"]


/* let score = 0;

let choix = prompt ("Veillez choisir la liste : mots ou phrases");

while (choix !== "mots" && choix !== "phrases")
{
    choix = prompt ("Veillez choisir la liste : mots ou phrases");

}

if (choix === "mots")
{
    // length permet de récupérer le nombre de mot dans la liste
    for (let i = 0; i < listeMots.length; i++)
    {
       let MotUtilisateur = prompt("Entrez le mot : " + listeMots[i]);

       if (MotUtilisateur === listeMots[i])
        {
          console.log("Félicitation!");
          score++;
          console.log("Votre score est de : " + score);

        }
       else
        {
          console.log("Dommage!");
          console.log("Votre score est de : " + score);

        }
    }
    console.log("Voici ton score final : " + score + " sur 3");
}
else
{
   // length permet de récupérer le nombre de mot dans la liste
    for (let i = 0; i < listePhrases.length; i++)
    {
    let MotUtilisateur = prompt("Entrez le mot : " + listePhrases[i]);

     if (MotUtilisateur === listePhrases[i])
        {
          console.log("Félicitation!");
          score++;
          console.log("Votre score est de : " + score);

        }
    else
        {
          console.log("Dommage!");
          console.log("Votre score est de : " + score);

        }
    }
    console.log("Voici ton score final : " + score + " sur 3");
}
*/

// CONDITION AVEC IF / ELSE

/*
let MotUtilisateur = prompt("Entrez le mot : " + listeMots[0]);

if (MotUtilisateur === listeMots[0])
{
    console.log("Félicitation!");
    score++;
    console.log("Votre score est de : " + score);

}
else
{
    console.log("Dommage!");
    console.log("Votre score est de : " + score);

}
// Pas besoin de remettre un let, la variable est déjà déclarer plus haut
MotUtilisateur = prompt("Entrez le mot : " + listeMots[1]);

if (MotUtilisateur === listeMots[1])
{
    console.log("Félicitation!");
    score++;
    console.log("Votre score est de : " + score);

}
else
{
    console.log("Dommage!");
    console.log("Votre score est de : " + score);

}

MotUtilisateur = prompt("Entrez le mot : " + listeMots[2]);

if (MotUtilisateur === listeMots[2])
{
    console.log("Félicitation!");
    score++;
    console.log("Votre score est de : " + score);

}
else
{
    console.log("Dommage!");
    console.log("Votre score est de : " + score);

}

console.log("Voici ton score final : " + score + "sur 3");
*/

function afficherResultat (score, nombreTotalMots)
{
    //on affiche le score de l'utilisateur sur le nombre total de mots proposés
    console.log("Voici ton score final : " + score + " sur " + nombreTotalMots);
}

function choisirPhrasesOuMots ()
{
    //Tant que l'utilisateur n'a pas choisis "mots" ou phrases", on lui redemande
    let choix = prompt ("Veillez choisir la liste : mots ou phrases");
    while (choix !== "mots" && choix !== "phrases")
    {
      choix = prompt ("Veillez choisir la liste : mots ou phrases");
    }
    return choix;
}

function lancerBoucleDeJeu (listePropositions)
{
    let score = 0;
     // length permet de récupérer le nombre de mot dans la liste
     for (let i = 0; i < listePropositions.length; i++)
     {
        let MotUtilisateur = prompt("Entrez le mot : " + listePropositions[i]);
 
        if (MotUtilisateur === listePropositions[i])
         {
           console.log("Félicitation!");
           score++;
           console.log("Votre score est de : " + score);
 
         }
        else
         {
           console.log("Dommage!");
           console.log("Votre score est de : " + score);
 
         }
     }
     return score;
}

function lancerJeu()
{
    let choix = choisirPhrasesOuMots();
    let score = 0;
    let nombreTotalMots = 0;

    if (choix === "mots")
    {
        score = lancerBoucleDeJeu(listeMots);
        nombreTotalMots = listeMots.length;

    }
    else
    {
        score = lancerBoucleDeJeu(listePhrases);
        nombreTotalMots = listePhrases.length;
    }
    afficherResultat(score, nombreTotalMots);
}

lancerJeu();