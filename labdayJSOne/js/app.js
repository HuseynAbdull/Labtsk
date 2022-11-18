

 function Show(){
    let element =document.querySelector('.left')
    element.classList.toggle('active')
 }

 let count = 16;
 function Zoom(){
     count ++;
     var text =document.querySelector('.home_page_text .zoom_in')
     text.style.fontSize=count+'px';
      
 }

 function Zoom_out(){
    count --;
    var text =document.querySelector('.home_page_text .zoom_in')
    text.style.fontSize=count+'px';
 }


function Color(){
    var changecolor =document.querySelector('.home_page_text .change_color');
    var input = document.querySelector('.input_page input');
    var value = input.value;
    changecolor.style.color = `${value}`;

    
}