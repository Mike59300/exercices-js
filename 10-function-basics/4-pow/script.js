/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/



// let x = prompt("First number?");
// let n = prompt("Second number?");

function pow(x, n){
      if (n > 0){
            return x ** parseInt(n)
}
else {
      alert("Error")
}
      }

alert(pow(+prompt(x), +prompt(n)))