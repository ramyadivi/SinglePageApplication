function fnShowfirstlineparagraph() {
 location.hash = "first-line";
}
function fnFirstLineParagraph() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'Modules/first-line/views/CParagraph.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('allModules').innerHTML = oEv.currentTarget.responseText;
            }
        }
        
    };
    oXhr.send();
}
