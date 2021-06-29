let button = document.querySelector(".button");

button.onmousemove = (e) => {
    let x = e.pageX - e.target.offsetLeft;
    let y = e.pageY - e.target.offsetTop;

    button.style.setProperty('--polX', x + 'px');
    button.style.setProperty('--polY', y + 'px');
};