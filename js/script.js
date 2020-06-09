function playMusic(e){
    let dataKey = e.key;
    if (!dataKey) {
        dataKey = e.target.textContent === 'c2' ? 2 : e.target.textContent;
      }

    let audio_big = document.querySelector(`.audio_big[data-key="${dataKey}"]`);
    if(!audio_big) return;
    let btn_piano_big =document.querySelector(`.btn_piano_big[data-key="${dataKey}"]`);
    if(!btn_piano_big) return;
    audio_big.currentTime = 0;
    audio_big.play();
    btn_piano_big.style.boxShadow = '0 0 20px orange';
    setTimeout(()=> btn_piano_big.removeAttribute('style'), 200);
}

window.addEventListener('keyup', playMusic);
window.addEventListener('click', playMusic)