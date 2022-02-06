let colors = [
    "#4148E8",
    "#fd5086",
    "#9d274a",
    "#f3ab2e"
]

function createElement(){
    
    let container = document.querySelector('.container');
    let span = document.createElement('span');

    var size = Math.random() * 7;
    const bg = colors[Math.floor(Math.random() * colors.length)];
    span.style.height = 50 + size + 'px';
    /* I don't like this number */
    span.style.borderRadius = 50 + size + 'px';
    span.style.width = 50 + size + 'px';
    span.style.top = Math.random() * innerHeight + 'px';
    span.style.left = Math.random() * innerWidth + 'px';
    span.style.backgroundColor = bg;
    container.appendChild(span);    
    
    setTimeout(() =>{
        span.remove()
    },5000);
}

setInterval(createElement,500);