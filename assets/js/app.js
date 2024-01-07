const btns = document.querySelectorAll('.btn-slide');
const videos = document.querySelectorAll('.video-slide')

btns.forEach(element => {
    element.addEventListener('click',(event)=>{
        const attr = event.target.getAttribute('data-video');
        clear();
        document.getElementById(attr).classList.add('active');
    });
});
 
function clear(){
    videos.forEach(element => {
        element.classList.remove('active');
    });
}