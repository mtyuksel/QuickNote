const userNoteCookieKey = 'QN_user-note';

document.addEventListener('DOMContentLoaded', function () {
    getNotes();

    const saveButton = document.getElementById('save');

    saveButton.onclick = function () {
        const noteArea = document.getElementById('note');
        setCookie(userNoteCookieKey, noteArea.value, '99999');
    };

    function getNotes() {
        const noteArea = document.getElementById('note');
        noteArea.value = getCookie(userNoteCookieKey);
    }

    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

}, false);


