// const  header = document.createElement("header");
// header.id = "main-header"
// header.classList.add("main-header"); 

// const root = document.getElementById('root');
// header.innerHTML = `<img src="./img/logo.png" alt="logo">
// <nav class="main_menu">
//     <ul>
//         <li><a href="/">Inicio</a></li>
//         <li><a href="/nosotros">nosotros</a></li>
//         <li><a href="/contacto">contacto</a></li>
//     </ul>
// </nav>`
// root.appendChild(header);

const createElement = (element , attr={}, children = []) => {
let elem = document.createElement(element);

let keys = Object.keys(attr)
    keys.map(k => elem.setAttribute(k, attr[k]));
    
    children.map(child => renderChild(elem, child))
    return elem;
}

const renderChild = (elem, child) => {
    if(typeof child === "string"){
        elem.innerHTML += child; 
        return
    }
    elem.appendChild(child);
}

const render = (element, parent) => {
    parent.appendChild(element);
}


export { createElement, render };