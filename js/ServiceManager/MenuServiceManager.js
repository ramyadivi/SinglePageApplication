function fnMenuLoad() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'Modules/menu/views/menu.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('menu').innerHTML = oEv.currentTarget.responseText;
            }
        }
    };
    oXhr.send();
}
