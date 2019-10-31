var x = document.getElementsByTagName("input");
var i;
for(i=0;i<x.length;++i){
  if(x[i].required&&x[i].id=='birthday')
    x[i].value='20101102';
}