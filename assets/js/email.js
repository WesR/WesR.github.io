window.onload = function () {
    //Going to add my email to things, this will nock off the weak ... I hope.
    eml = 'aGVsbG9Ad2V' + 'zcmluZy5jb20=';
    document.getElementById('mailLink').href = 'mailto:' + window.atob(eml);
};