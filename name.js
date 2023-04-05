'use strict';
let userName = prompt("what is your name?", "")
if (!confirm(`your name is ${userName}`))
    userName = prompt("what is your real name?", "")
alert(`awesome! hello ${userName}`)
