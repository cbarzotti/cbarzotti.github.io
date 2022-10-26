
function sendMail() {
    Email.send({
        SecureToken : "c2617662-28d2-4ba4-96e5-af7a181d0f66",
        To : "estrazionebuoniamazon@gmail.com",
        From : "531tonk@gmail.com",
        Subject : "Test invio mail",
        Body : "Primo tentativo dell'invio"
    }).then(
      message => alert(message)
    );
}

