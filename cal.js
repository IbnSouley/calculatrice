const touches = [...document.querySelectorAll('.bouton')];
const listekeycode = touches.map(touche =>touche.dataset.key);

document.addEventListener('keydown', (e) => {
    const valeur = e.listekeycode.toString ();
    calculer (valeur)

})

document.addEventListener('click', (e)=> {
    const valeur = e.target.dataset.key;
    calculer(valeur)
})

const calculer = (valeur) => {
    if (listekeycode.includes(valeur)) {
        console.log(listekeycode);
    }
}