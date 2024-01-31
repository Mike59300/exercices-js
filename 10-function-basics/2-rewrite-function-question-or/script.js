/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/

let age=prompt("Age?")

// function checkAge(age) {
//       return age > 18 ? true : confirm("Did parents")
// }


function checkAge(age) {
      return age > 18 || confirm("Did parents")
}
checkAge(age)  
