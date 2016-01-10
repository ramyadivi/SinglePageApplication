function fnShow3Boxes() {
 location.hash = "3-boxes";
}
function fn3Boxes() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'Modules/3-Boxes/views/3Blocks.html');

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
