
let jokebox=document.querySelector('.jokebox');
async function jokes(){
    let res=await fetch(` https://hindi-jokes-api.onrender.com/jokes/49?api_key=0587ec1eb7fad4c1c76c91055f5b`);
    let data=await res.json();
    let sno=0;
    data.data.forEach(element => {
        
        jokebox.innerHTML+=`
        <div class="joke">
          
        <h4>${sno=sno+1}</h4>

        <p id="content">Joke:-  ${element.jokeContent}</p>

     </div>`;
    });
}
 jokes();

