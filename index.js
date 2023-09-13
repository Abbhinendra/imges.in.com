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
let in1 = document.getElementById('in');
let btn = document.getElementById('btn');
let keyword = "";
let page = 1;
let accesskey = "8Gciqb5xo0Bs92UzuxAvYd8AQ1cqIY0_yMGVvdTDPJs";
let box = document.querySelector('.box');
async function images() {
  keyword = in1.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=20`;

  const res = await fetch(url);
  const data = await res.json();
  try {


    if (page === 1) {
      box.innerHTML = "";
    }

    data.results.forEach(element => {
      
      let div1 = document.createElement('div');
      let img = document.createElement('img');
      img.classList.add('image')

      let btnDb = document.createElement('button');
      btnDb.classList.add('btnDb');
      btnDb.innerText = "Download image";
      div1.appendChild(btnDb);
      img.src = element.urls.small;
      div1.appendChild(img);
      box.appendChild(div1);
      document.body.addEventListener('mouseover', () => {
        btnDb.style.display = 'flex';
      })
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

      btnDb.addEventListener('click', () => {
        d();
      })


    });
    let more = document.getElementById('more');
    more.style.display = "block";
  } catch (error) {
    alert('Make sure that all words are spelled correctly.Try diffrent keywords');
  }
}

btn.addEventListener('click', () => {
  page = 1;
  images();
})

more.addEventListener('click', function () {

  page++;
  images();

})








