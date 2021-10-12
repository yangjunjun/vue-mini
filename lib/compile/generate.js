function generate (ast) {
    return genElement(ast)
}

function genElement (node) {
    if (node.tag) {
        return `_c('${node.tag}', [${genChildren(node.children || [])}])`
    } else if (node.text) {
        const code = node.expression.map(item => {
            if (item.flag) {
                return `_s(${item.value})`
            } else {
                return JSON.stringify(item.value)
            }
        }).join('+')
        return `_v(${code})`
    }
}

function genChildren (nodes) {
    return nodes.map(node => genElement(node)).join(',')
}


// function tgenerate (ast) {
//     console.log(ast);
//     return tgenElement(ast)
// }

// function tgenElement (node) {
//     if (node.tag) {
//         return `<${node.tag}>
// ${tgenChildren(node.children || [])}
// </${node.tag}>`
//     } else if (node.text) {
//         return `    ${JSON.stringify(node.text.trim())}`
//     }
// }

// function tgenChildren (nodes) {
//     return nodes.map(node => tgenElement(node)).join('\n')
// }