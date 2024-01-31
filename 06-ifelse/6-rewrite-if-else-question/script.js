/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/

let login = prompt("login :")




let message = login == "Employee" ? "Hello" : 
            login == 'Director' ? "Greeting" :
            login =='' ? 'No login': '' ;
console.log(message)
