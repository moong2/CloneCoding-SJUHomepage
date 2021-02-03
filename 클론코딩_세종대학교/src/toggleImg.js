'use strict'
let isPause = false;
let eachPause = false;
let i = 1;

function pressEachButton(self, idx){
    eachPause = true;
    i = idx;
    toggleImg(self, idx);
}
function toggleImg(self, idx){
    if(!isPause || eachPause){
        const el = document.getElementById("backgroundImage");
        el.classList.add("animation");
        const selectEL = document.querySelector('#select');
        el.src = "img/img"+idx+".jpg";
        selectEL.id = ""
        self.id = "select";
        setTimeout(()=>el.classList.remove("animation"), 500);
    }
}

function toggleAll(self){
    const order = [4, 1, 2, 3, 5];
    let time;
    isPause = false;
    eachPause = false;

    if(self.classList[0] === "slideStart"){
        time = setInterval(()=>{
            let selectEL2 = document.getElementsByName("select"+order[i]);         
            toggleImg(selectEL2[0], order[i]);
            i = (i + 1) % 5;
        }, 3000);
    }
    else if(self.classList[0] === "slidePause"){
        isPause = true;
        clearInterval(time);
    }
    
}