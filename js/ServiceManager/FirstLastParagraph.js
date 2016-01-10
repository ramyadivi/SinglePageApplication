function fnShowFirstLastParagraph() {
 location.hash = "first-last-paragraph";
}
function fnFirstLastParagraph() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'Modules/first-last-paragraph/views/CFirstLast.html');

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
