export let createDOM = (tag, parent, className, text) => {
    let dom = document.createElement(tag)
    parent.appendChild(dom)
    dom.innerText = text
    dom.className = className
    return dom
}
