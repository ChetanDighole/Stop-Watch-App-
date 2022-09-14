var ms=00,s=00,m=00;


var strt = document.querySelector('.start')
var stp = document.querySelector('.stop')
var rst = document.querySelector('.reset')
var txt = document.querySelector('.time')


strt.addEventListener('click',startCounter)
var counter;
function startCounter() {
    if(!counter){
        counter = setInterval(run,10);

        function run(){
            txt.textContent=m+":"+s+":"+ms;
            if(ms>60){
                ms=0;
                s++;
            }
            if(s>60){
                s=0;
                m=1;
            }
            ms++;

        }
    }

}


stp.addEventListener('click', function(){
    clearInterval(counter)
    counter = false;
})

rst.addEventListener('click', function(){
    clearInterval(counter)
    counter=false;
    ms=00,s=00,m=00;
    txt.textContent=m+":"+s+":"+ms;
})
