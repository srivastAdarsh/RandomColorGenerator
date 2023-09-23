const button=document.querySelector('button');
const div=document.querySelector('div');
button.addEventListener('click', ()=>{
    const random=randColor();
    const span=document.querySelector('span');

    const rgb=random.match(/\d+/g).map(Number); //getting all integer in string into array

    //if background color becomes dark, make the texts light

    if(rgb[0]+rgb[1]+rgb[2]<=200){
        div.setAttribute('class','visible');
        span.setAttribute('class','visible');
        button.setAttribute('class','visible');

    }else{
        div.setAttribute('class','');
        span.setAttribute('class','');
        button.setAttribute('class','');
    }


    button.style.backgroundColor=random;
    document.body.style.backgroundColor=random;
    span.innerText=random;

    
});

function randColor(){
    const r= Math.floor(Math.random()*256);
    const g= Math.floor(Math.random()*256);
    const b= Math.floor(Math.random()*256);

    return `rgb(${r},${g},${b})`;
}