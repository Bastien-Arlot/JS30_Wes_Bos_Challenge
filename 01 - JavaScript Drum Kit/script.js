window.addEventListener("keydown", function(e) {
    const audio = document.querySelector(`audio[data-key="${String(e.key.charCodeAt())}"]`);
    const key =  document.querySelector(`.key[data-key="${String(e.key.charCodeAt())}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add(`playing`);

});
function removeTransition(e){
   if(e.propertyName !== 'transform') return;
   this.classList.remove(`playing`);
}
const keys = document.querySelectorAll(`.key`);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));