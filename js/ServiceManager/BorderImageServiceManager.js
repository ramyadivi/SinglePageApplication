function fnShowBorderImage() {
 location.hash = "border-image";
}
function fnBorderImage() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'Modules/border-image/views/BorderImage.html');

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
