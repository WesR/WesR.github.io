window.onload = function () {
    var elements = document.querySelectorAll('[data-chaffle]');

    Array.prototype.forEach.call(elements, function (el) {
        var chaffle = new Chaffle(el, {
            lang: 'ja-katakana',//ja-katakana
            speed: 10,
            delay: 60,
        })
        el.addEventListener('mouseover', function () {
            chaffle.init();
        });
    });

    document.getElementById('cpyEmail').addEventListener('click', function (event) {
        var myEmail = document.getElementById('myEmail');
        myEmail.focus();
        myEmail.select();
        document.execCommand('copy');
    });

    document.getElementById('myEmail').addEventListener('click', function (event) {
        var myEmail = document.getElementById('myEmail');
        document.getElementById("emailForm").reset();
        myEmail.focus();
        myEmail.select();
    });
};

if (screen.width <= 650) {//Redirect if its a small screen (probably a phone)
    window.location = "./mobile.html";
    console.log('mobile redirect');
}