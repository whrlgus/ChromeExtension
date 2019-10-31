var x = document.getElementsByTagName("input");
var i;
for(i=0;i<x.length;++i){
  if(x[i].id.match(/(eng)\w*(name)/gi))
    x[i].value='hong gil dong';
}
