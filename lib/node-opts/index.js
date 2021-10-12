const nodeOps = {}

nodeOps.createElement = function createElement(tagName) {
    return document.createElement(tagName)
}

nodeOps.createTextNode = function createTextNode(tagName) {
    return document.createTextNode(tagName)
}

nodeOps.nextSibling = function nextSibling(node) {
    return node.nextSibling
}

nodeOps.parentNode = function parentNode(node) {
    return node.parentNode
}
nodeOps.appendChild = function appendChild(node, child) {
    return node.appendChild(child)
}
nodeOps.removeChild = function removeChild(node, child) {
    return node.removeChild(child)
}
 
nodeOps.insert = function insert(parent, elm, ref) {
    if (isDef(ref)) {
        if (nodeOps.parentNode(ref) === parent) {
            nodeOps.insertBefore(parent, elm, ref)
        }
    } else {
        nodeOps.appendChild(parent, elm)
    }
}

nodeOps.insertBefore = function insertBefore(parentNode, newNode, referenceNode) {
    parentNode.insertBefore(newNode, referenceNode)
}
