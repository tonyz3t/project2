
document.addEventListener('DOMContentLoaded', () => {
    let username = localStorage.getItem('username');
   
    // if there is no username stored give the user a form to create a username
    if(!localStorage.getItem('username')) {
        // get our user form div object
        let div = document.querySelector('#user-form-block');

        // give this section a title
        let title = document.createElement('h3')
        title.innerHTML = 'Please Type In A Username';
        div.appendChild(title);

        // create our form element
        let form = document.createElement('form');
        // append an input to the form
        let userfield = document.createElement('input');
        userfield.required = true;
        form.appendChild(userfield);
        // submit button
        let submit = document.createElement('input');
        submit.type = 'submit';
        // append to the form
        form.appendChild(submit);


        //append the form to the div
        div.appendChild(form);

        // when we submit the form we want to set the username given into localStorage
        form.onsubmit = () => {
            let username1 = userfield.value;
            localStorage.setItem('username', username1);

            document.querySelector('h2').innerHTML = username1;
        }

    }

    // init the site
    const init = username => {
        // connect to the websocket
            let socket = io.connect(location.protocol + '//' + document.domain + ':' + location.port);

        // when connected config the chatrooms
        socket.on("connect", () => {
            socket.emit('userdata', { username });
        });
    }
    


});