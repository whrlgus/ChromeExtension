# 자동완성 기능을 갖춘 크롬확장프로그램
이력서 작성시 기본 인적사항을 기입하는데 불편함을 느껴 이전에 입력한 데이터를 기반으로 새로 작성하는 이력서의 인적사항을 자동으로 채워주는 기능을 구현하려한다.

### 해결해야할 과제
1. 웹페이지의 input 테그를 찾아 html injection 코드를 실행하여 원하는 내용으로 text를 채운다.

다음과 같은 내용의 html 테그가 있다.
```html
<input class="gLFyf gsfi" maxlength="2048" name="q" type="text" 
jsaction="paste:puy29d" aria-autocomplete="both" aria-haspopup="false" 
autocapitalize="off" autocomplete="off" autocorrect="off" role="combobox" spellcheck="false" 
title="Search" value="" aria-label="Search" data-ved="0ahUKEwikgMzsv8HlAhWQzIsBHbtiD_EQ39UDCAQ">
```
다음은 input 테그 이름을 이용한 injection 코드이다.
``` js
document.getElementsByClassName('gLFyf gsfi')[0].value='asdfㅈㄸ';

```


var x = document.getElementsByTagName("input");
var i;
var str="";
for(i=0;i<x.length;++i){
if(x[i].required&&x[i].id=='email')x[i].value='abc@a.c';
}
