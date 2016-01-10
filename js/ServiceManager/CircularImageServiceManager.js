function fnShowCircularImage() {
 location.hash = "image-circle";
}
function fnCircularImage() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'Modules/image-circle/views/image.html');

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
