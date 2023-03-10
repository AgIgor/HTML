function handleCredentialResponse(response) {
    // console.log("Encoded JWT ID token: " + response.credential)
    const credential = jwt_decode(response.credential)
    console.log(credential)

    document.querySelector('#nome').textContent = credential.given_name
    document.querySelector('#sobrenome').textContent = credential.family_name

    document.querySelector('#email').textContent = credential.email
    document.querySelector('#sub').textContent = credential.sub
    document.querySelector('#foto').setAttribute("src", credential.picture)

    const list_titles = [
        'Hello World!',
        credential.name,
        credential.email,
        credential.email_verified,
        credential.sub
    ]
    const title = document.querySelector('title')

    if (typeof list_titles != 'undefined') {
        let val = 0
        setInterval(() => {
            if (val > list_titles.length - 1) {
                val = 0
                title.innerHTML = Date()
            } else {
                title.innerHTML = list_titles[val]
                val++
            }
        }, 1000)
    }
}

window.onload = function () {
    google.accounts.id.initialize({
        client_id: "923256170354-gjjsb1l72jcinb2hrdr9h6j8432fnm7l.apps.googleusercontent.com",
        callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        {
            theme: "outline",
            size: "large",
            shape: "pill",
            context: "use",
            text: "continue_with"
        }
    );
    google.accounts.id.prompt()
}


