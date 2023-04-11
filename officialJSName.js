/*Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’

If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”*/

'use strict';

let guessedName = prompt('What is the "official" name of JavaScript?', "");
if (guessedName == "ECMAScript")
    alert("Correct!")
else
    alert("You don't know? ECMAScript!")
