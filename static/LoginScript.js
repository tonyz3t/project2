
// check to see if the displayname is saved in local storage

// if(!localStorage.getItem('username')){
//     document.querySelector('#name').innerHTML = "NO USERNAME";
// }

document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('#name').innerHTML = `WHAT THE FUCK`;
    // document.querySelector('h2').innerHTML = 'WHYYYYYYYY';

    document.querySelector('#form').onsubmit = () =>{

        const request = new XMLHttpRequest();
        request.open('POST', '/start');
        
        // when request completes
        request.onload = () => {

            document.querySelector('h2').innerHTML = "please jesus";

            // set the username field to be the username saved in local storage
            const username = document.querySelector('#username').value;
            localStorage.setItem('username', username);
            
            document.querySelector('h2').innerHTML = username;
        }
        request.send(username)
        return false;
    };

    document.querySelector('button').onclick = () => {
        const name = document.querySelector('#displayname').value;

        document.querySelector('#name').innerHTML = name;
    };

});