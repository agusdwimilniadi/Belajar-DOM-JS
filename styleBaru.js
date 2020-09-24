const par3 = document.querySelector('section#a p.p3');
const par2 = document.querySelector('section#a p.p2');

function ubahWarnaIn() {
    par2.style.backgroundColor = 'red';

}

function ubahWarnaOut() {

    par2.style.backgroundColor = 'blue';
}

par2.addEventListener('mouseenter', ubahWarnaIn);
par2.addEventListener('mouseleave', ubahWarnaOut);

















const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function(){
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');

    const teksLiBaru = document.createTextNode('ITEM BARU DI LI');
    liBaru.appendChild(teksLiBaru);
    ul.appendChild(liBaru);

});


