document.getElementById('dice').addEventListener('click', function() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;

    var diceImage = document.getElementById('diceImage');
    diceImage.src = 'img/' + randomNumber + '.png';
});






