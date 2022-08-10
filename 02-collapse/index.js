const btnOpenColl = document.querySelector('.collapsible__button');
const spans = document.querySelectorAll('.collapsible__button > span');
const text = document.querySelector('.collapsible__content');

let isPlay = false;
btnOpenColl.addEventListener('click', function(){  
    if(!isPlay){
    spans[1].style.display = "none";
    spans[0].style.display= "block";
    text.style.display = "block";
    const aliceTumbling = [
        { color: 'red'}, 
        { color: '#431236', offset: 0.3},
        { color: 'green' }
      ];
      
      const aliceTiming = {
        duration: 3000,
        iterations: Infinity
      }
      text.animate(
        aliceTumbling, 
        aliceTiming
      )
    
    isPlay = true;
    }else{
        spans[0].style.display = "none";
        spans[1].style.display = "block";
        text.style.display = "none";
        isPlay = false;
    }
})

