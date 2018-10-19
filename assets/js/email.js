window.onload = function () {
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