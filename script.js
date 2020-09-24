// DOM SELECTION

// getElementById
/*
const judul = document.getElementById('judul');

judul.style.color = 'red';
judul.style.backgroundColor= 'grey';
judul.innerHTML = "Agus"


// document.getElementsByTagName() --> Ini ada Indexnya kalo diambil

const p = document.getElementsByTagName('p');


for (let i = 0; i<p.length; i++) {
    p[i].style.backgroundColor ='grey';
}

const h1 = document.getElementsByTagName('h1');

h1[0].style.fontSize ='50px'


// document.getElementsByClassName()  
// -> HTMLCollections

const p1 = document.getElementsByClassName('p1');

p1[0].innerHTML = 'Ini diubah';




// document.querySelector()

const p4 = document.querySelector('#b p')
p4.style.color = 'green';
p4.style.fontSize  = '30px';

const li2 = document.querySelector('section ul li:nth-child(2)')
li2.style.backgroundColor='blue'



// document.querySelectorAll()

const q = document.querySelectorAll('p');
q[2].style.backgroundColor = 'lightblue'

for (let i=0; i<q.length; i++){
    q[i].style.backgroundColor = 'lightblue';
} 



//NODE ROOT
const sectionB = document.getElementById('b');
const p4 =sectionB.querySelector('p');

p4.style.backgroundColor ='orange'



// element.getAttribute 

const judul = document.getElementsByTagName('h1')[0];

judul.setAttribute('Nama', 'Sandika') // Menambahkan attribute

const a = document.querySelector('a');



// element.classList.add()
// element.classList.remove()
// element.classList.toogle()
// .....item (untuk mencari index class)
//......contains(untuk mencari apakah ada class yang bernama ini)
//......replace (mengganti class dengan yg baru




// DOM MANIPULATION NODE 

// buat elemen baru
const pBaru = document.createElement('p');
const isiP = document.createTextNode('Ini isi paragraf 1');


// simpan tulisan ke paragraf
pBaru.appendChild(isiP);

// simpan pBaru di akhir section A

const sectionA= document.getElementById('a');
sectionA.appendChild(pBaru);


// menambahkan elemen diantara elemen


const liBaru = document.createElement('li');
const isiLiBaru = document.createTextNode('Teks Li BARU');

liBaru.appendChild(isiLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2); // (yang diisi apa, sebelum apa) <- FOrmat penulisan























// meremove link
const sectionAa = document.getElementById('a');
const link = document.getElementsByTagName('a')[0];
sectionAa.removeChild(link);


//Replace Halaman
const sectionB = document.getElementById('b');
const p4 = document.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Inilah Judul Baru H2');

h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, p4);*/































