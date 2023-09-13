
let page1=1;
let keyword1="";
let accesskey1 = "8Gciqb5xo0Bs92UzuxAvYd8AQ1cqIY0_yMGVvdTDPJs";
let inmport = document.querySelector('.int');
let box1=document.querySelector('.box1');
async function images2(){
    keyword1=inmport.value;
    const url = `https://api.unsplash.com/search/photos?page=${page1}&query=${keyword1}&client_id=${accesskey1}&per_page=20`;
    const res=await fetch(url);
    const data=await res.json();
    if(page1===1){
        box1.innerHTML="";
    }
    data.results.forEach(element => {
        
        let db=document.createElement('div');
        let im=document.createElement('img');
        let down=document.createElement('button');
        down.classList.add('out');
        down.innerText="Download image";
        document.body.addEventListener('mouseover', () => {
            down.style.display = 'flex';
          })
        im.src=element.urls.full;
        
        db.appendChild(down);
        db.appendChild(im);
        box1.appendChild(db);

        function d() {
            let url1 = element.links.download;
            fetch(url1).then(res => res.blob()).then(file => {
    
              let tem = URL.createObjectURL(file);
              let a1 = document.createElement('a');
              a1.href = tem;
              a1.download = 'filename';
    
              document.body.appendChild(a1);
              a1.click();
              a1.remove();
    
              URL.revokeObjectURL(tem);
            })
          }
        down.addEventListener('click',function(){
d();
          });
    });
let more1=document.getElementById('more1').style.display="block";
   
}
inmport.addEventListener('input',()=>{
    page1=1;
    images2();
})

more1.addEventListener('click',()=>{
page1++;
images2();

})
