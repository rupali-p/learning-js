/*convert the following using ? operator
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}*/

// let message = (login == 'Employee') ? 'Hello!' :
//     (login == 'Director') ? 'Greetings' :
//         (login == '') ? 'No login' :
//             '';


// part 2
/*Write the code which asks for a login with prompt.

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled”
Please use nested if blocks. Mind the overall readability of the code.

Hint: passing an empty input to a prompt returns an empty string ''. Pressing ESC during a prompt returns null.*/

let user = prompt("Who's there?", '')
if (user == null || user == '')
    alert("Cancelled")
else if (user != "Admin")
    alert("I don't know you")
else {
    pw = prompt("Password?", '')
    if (pw == null || '')
        alert("Cancelled")
    else if (pw != "TheMaster")
        alert("Wrong password!")
    else if (pw == "TheMaster")
        alert("Welcome!")
}


