function createElm(vnode, parentElm, refElm) {
    if (vnode.tag) {
        vnode.elm = nodeOps.createElement(vnode.tag, vnode)
        nodeOps.insert(parentElm, vnode.elm, refElm)
    } else if (vnode.text) {
        vnode.elm = nodeOps.createTextNode(vnode.text)
        nodeOps.insert(parentElm, vnode.elm, refElm)
    }
    if (vnode.children) {
        vnode.children.forEach(node => {
            createElm(node, vnode.elm)
        })
    }
}

function removeNode(el) {
    const parent = nodeOps.parentNode(el)
    if (isDef(parent)) {
        nodeOps.removeChild(parent, el)
    }
}

function patch(oldVnode, vnode) {
    // 如果 oldVnode 不是 vnode
    if (oldVnode.nodeType) {
        const parentElm = nodeOps.parentNode(oldVnode)
        createElm(vnode, parentElm, nodeOps.nextSibling(oldVnode))
        removeNode(oldVnode)
    }
}