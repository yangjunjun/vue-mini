function mount (vnode, parent) {
    var ele = null;
    if (vnode.tag) {
        ele = document.createElement(vnode.tag)
        parent.appendChild(ele)
    }
    if (vnode.text) {
        ele = document.createTextNode(vnode.text)
        parent.appendChild(ele)
    }
    if (vnode.children) {
        vnode.children.forEach(node => {
            mount(node, ele)
        })
    }
}
