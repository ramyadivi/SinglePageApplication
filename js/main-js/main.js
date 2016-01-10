window.onhashchange = fnHasChange;
function fnDoLoad() {
    alert('page loaded');
    fnMenuLoad();
    fnHasChange();
}

function fnHasChange(oEv){
 var sNewToken = location.hash

 switch(sNewToken){
  case '#HumanFace':
   fnHumanFace();
  break;
  case '#first-line':
  fnFirstLineParagraph();
  break;
  case '#first-last-paragraph':
  fnFirstLastParagraph();
  break;
  case '#empty':
  fnEmpty();
  break;
  case '#hover':
  fnHover();
  break;
  case '#triangle':
  fnTriangle();
  break;
  case '#list':
  fnList();
  break;
  case '#3-boxes':
  fn3Boxes();
  break;
  case '#blur-text':
  fnBlurText();
  break;
  case '#border-image':
  fnBorderImage();
  break;
  case '#image-circle':
  fnCircularImage();
  break;
  case '#ribbon':
  fnRibbon();
  break;
  case '#text-format':
 
  fnTextFormat();
  break;
  case '#button':
  fnButton();
  break;
  case '#About-us':
  fnAboutUs();
  break;
  default:

  break;
 }

}

function fnsuccess(){

  alert("Registration successfull");
}

$(function(){
  $('#mobilemenu').click(function(){
    $('#menu').toggle();
  });
});

