function createDivs() {
    let container = document.querySelector('.container');
    let totaldivs = 16 * 16;
    for (let i= 0; i < totaldivs; ++i) {   
        let newdiv = document.createElement('div');
        newdiv.className = 'divForGrid';
        //*adding mouse hover effect that change color
        newdiv.addEventListener('mouseenter', () => {
            newdiv.style.backgroundColor = "black";
        });
        container.appendChild(newdiv);
    }
}
createDivs();
