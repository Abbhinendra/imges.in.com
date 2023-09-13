let page=1;
async function p(){
    const res=await fetch(`https://api.unsplash.com/photos/?client_id=8Gciqb5xo0Bs92UzuxAvYd8AQ1cqIY0_yMGVvdTDPJs&per_page=100&page=${page};`);
    const data=await res.json();
    let boxpx=document.querySelector('.boxpx');
let str="";
   data.forEach(element => {
    
    let divPx=document.createElement('div');

    let imgPx=document.createElement('img');

    imgPx.src=element.urls.small;
    divPx.appendChild(imgPx);
    boxpx.appendChild(divPx);
  
   });
   
}

p();


let m=document.getElementById('m');
m.addEventListener('click',()=>{
    page++;
    p();
})

let m1=document.getElementById('m1');
m1.addEventListener('click',()=>{
    document.querySelector('.boxpx').innerHTML="";
    p();
})


let bars = document.querySelector('.bars');
let ul1 = document.querySelector('ul');

bars.addEventListener('click', () => {
  ul1.classList.toggle('add');
  let ham = bars.firstElementChild;
  if (ul1.classList.contains('add')) {
    ham.classList.replace('fa-bars', 'fa-xmark');
  }
  else {
    ham.classList.replace('fa-xmark', 'fa-bars')
  }
})