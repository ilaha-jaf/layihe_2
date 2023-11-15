const btn = document.querySelector('.btn');
const input = document.querySelector('input');
// const clean=document.querySelector('.list-item .clean');
const add = document.querySelector('.add');
const list = document.querySelector('.list');
const plus = document.querySelector('.plus');
const listItem = document.querySelector('.list-item');
const ul = document.querySelector('.paragraph');
const sort = document.querySelector('.sort');
const sort2 = document.querySelector('.sort2');
let bool = true;



btn.addEventListener('click', () => {

  const inputValue = input.value.trim();
  if (inputValue !== '') {
    const li = document.createElement('li');
    const div = document.createElement('div');
    const p = document.createElement('p');
    const svg = document.createElement('img');
    svg.src = './image/ad.svg';
    div.classList.add('list2');
    p.classList.add('p2');
    svg.classList.add('svg2');
    li.classList.add('li2');
    add.style.display = 'none';
    list.style.display = 'block';
    p.innerText = input.value;
    div.append(p);
    div.append(svg);
    li.append(div);
    ul.append(li);
    input.value = '';




    svg.addEventListener('mouseenter', () => {
      svg.src = './image/Group 70.svg';
    })
    svg.addEventListener('mouseleave', () => {
      svg.src = './image/ad.svg';
    });

    svg.addEventListener('click', () => {
      li.parentNode.removeChild(li);
      if (ul.childElementCount == 0) {
        list.style.display='none';
      }
    })
 

  }

})

let clean = document.querySelector('.clean');

clean.addEventListener('mouseenter', () => {
  clean.src = './image/Group 70.svg';
})
clean.addEventListener('mouseleave', () => {
  clean.src = './image/ad.svg';
});
clean.addEventListener('click', () => {
  input.value = '';
})
plus.addEventListener('click', () => {
  add.style.display = 'block';
})

sort.addEventListener('click', () => {
  const s = document.querySelectorAll('.p2');
  const t = [...s];

  if (bool) {
    sort.src = './image/Group 90 (1).svg';
    t.sort((a, b) => {
      if ((a.innerText).toUpperCase() < (b.innerText).toUpperCase()) {
        return -1;
      }
      else {
        return 1;
      }
    });
    sort.addEventListener('mouseenter', () => {
      sort.src = './image/Group 91.svg';
    })
    sort.addEventListener('mouseleave', () => {
      sort.src = './image/Group 90 (1).svg';
    });
  }
  else {
    sort.src = './image/Group 74.svg';
   
    t.sort((a, b) => {
      if ((a.innerText).toUpperCase() > (b.innerText).toUpperCase()) {
        return -1;
      }
      else {
        return 1;
      }
    });
    sort.addEventListener('mouseenter', () => {
      sort.src = './image/Group 73.svg';
    })
    sort.addEventListener('mouseleave', () => {
      sort.src = './image/Group 74.svg';
    });
  }
  bool = !bool;




  const ul2 = document.querySelector('.paragraph');
  t.forEach((item, index) => {
    const li = document.querySelector('.li2');
    const div = document.querySelector('.list2');
    const svg = document.querySelector('.svg2');
    div.append(item);
    div.append(svg);
    li.append(div);
    ul2.append(li);
  })
})

sort.addEventListener('mouseenter', () => {
  sort.src = './image/Group 91.svg';
})
sort.addEventListener('mouseleave', () => {
  sort.src = './image/Group 90 (1).svg';
});



sort.addEventListener('mouseenter', () => {
  sort.src = './image/Group 73.svg';
})
sort.addEventListener('mouseleave', () => {
  sort.src = './image/Group 74.svg';
});