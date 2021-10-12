var regTagStart = /^<([^>\/]+)>/;
var regText = /^([^<]+)(?=<)/;
var regTagEnd = /^<\/([^>]+)>/;
var regWhitespace = /^\s+/;
function parse (tmplate, option = {}) {
    var preserveWhitespace = !!option.preserveWhitespace;
    var ast = null;
    const stack = [];
    let currentNode = null; 
    var index = 0;
    function march (n) {
        index += n;
        tmplate = tmplate.substring(n)
    }
    while (tmplate) {
        var match = null;
        if (match = tmplate.match(regTagStart)) {
             // 开始标签
            var tag = match[1]
            var node = {
                tag,
            }
            stack.push(node)
            
            if (!ast) {
                ast = node
            } else {
                currentNode.children = currentNode.children ? currentNode.children : []
                currentNode.children.push(node)                
            }
            currentNode = node
            march(match[0].length)
        } else if (match = !preserveWhitespace && tmplate.match(regWhitespace)) {
            // 空白字符
            march(match[0].length);
        } 
        else if (match = tmplate.match(regText)) {
            // 开始文本
            var text = match[1]
            currentNode.children = currentNode.children ? currentNode.children : []
            currentNode.children.push({
                text: text,
            })
            march(match[0].length);
        }  else if (match = tmplate.match(regTagEnd)) {
            // 结束标签
            var tag = match[1]
            if (currentNode.tag === tag) {
                stack.pop()
                currentNode = stack[stack.length - 1]
            } else {
                warn('开始结束标签不匹配', currentNode.tag, tag)
            }   
            march(match[0].length);
        } else {
            warn('未知情况')
        }
    }
    return ast;
}

