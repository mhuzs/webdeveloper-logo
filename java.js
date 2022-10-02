AOS.init();
 let mine=document.getElementById('my');
 let bon=document.querySelector('#bak')
 console.log(mine);
 bon.addEventListener('mouseenter',(e)=>{
    mine.src.match('pictures/logo.png')
        mine.src='pictures/logo2.png';
        mine.style.background='turquoise'
 })
 bon.addEventListener('mouseleave',(q)=>{
    mine.src.match('pictures/logo2.png')
        mine.src='pictures/logo.png';
        mine.style.background='white' 
 })