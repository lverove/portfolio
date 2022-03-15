const menuBtn = document.querySelector('#open');
const closeBtn = document.querySelector('#close');
const menu = document.querySelector('nav .container ul');

menuBtn.addEventListener('click', () => {
    menu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
})

closeBtn.addEventListener('click', () => {
    menu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
})

const navItems = menu.querySelectorAll('li');

const changeActiveItem = () => {
    navItems.forEach(item => {
        const link = item.querySelector('a');
        link.classList.remove('active');
    })
}
navItems.forEach(item => {
    const link = item.querySelector('a');
    link.addEventListener('click', () => {
        changeActiveItem();
        link.classList.add('active');
    })
})

const skillItems = document.querySelectorAll('section.competences .competence');

skillItems.forEach(competence => {
    competence.querySelector('.head').addEventListener('click', () =>{
        competence.querySelector('.items').classList.toggle('show-items');
    })
})
const lireplusBtn = document.querySelector('.plus');
const lireplusContenu = document.querySelector('.lire-plus-contenu');

lireplusBtn.addEventListener('click', () =>{
    lireplusContenu.classList.toggle('show-content');
    if (lireplusContenu.classList.contains('show-content')){
        lireplusBtn.textContent = "Moins";
    }
})
