var Links = {
  setColor : function(color){
      $('a').css('color', color);
    }
}
var Body = {
  backgroundColor : function(target, color){
      target.style.backgroundColor = color;
  },
  setColor : function(color){
      $('#grid').css('color', color);
  }
}
function changeColor(self){
  var target = document.querySelector('body');
  if(self.value === 'blue'){
    Body.backgroundColor(target, 'powderblue');
    self.value = 'white';
    Links.setColor('darkblue');
    Body.setColor('darkblue');
  }
  else{
    Body.backgroundColor(target, 'white');
    self.value = 'blue';
    Links.setColor('black');
    Body.setColor('black');
  }
}
