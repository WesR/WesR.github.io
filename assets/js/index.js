window.onload = function () {
    var elements = document.querySelectorAll('[data-chaffle]');

    Array.prototype.forEach.call(elements, function (el) {
        var chaffle = new Chaffle(el, {
            lang: 'en',//ja-katakana
            speed: 10,
            delay: 60,
        })
        el.addEventListener('mouseover', function () {
            chaffle.init();
        });
    });

    addEmail = function () {
        //Going to add my email to things, this will nock off the weak ... I hope.
        eml = 'aGVsbG9Ad2V' + 'zcmluZy5jb20=';
        document.getElementById('myEmail').value = window.atob(eml);
        document.getElementById('myEmail').placeholder = window.atob(eml);
    }

    addEmail();

    document.getElementById('cpyEmail').addEventListener('click', function (event) {
        addEmail();
        var myEmail = document.getElementById('myEmail');
        myEmail.focus();
        myEmail.select();
        document.execCommand('copy');
    });

    document.getElementById('myEmail').addEventListener('click', function (event) {
        addEmail();
        var myEmail = document.getElementById('myEmail');
        myEmail.focus();
        myEmail.select();
    });
};

if (screen.width <= 650) {//Redirect if its a small screen (probably a phone)
    window.location = "./mobile.html";
    console.log('mobile redirect');
}
