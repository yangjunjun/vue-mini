var html = `
<div>
    <p>test</p>
    <p>foo</p>    
</div>
`

var result = {
    "tag": "div",
    "children": [{
            "tag": "p",
            "children": [{
                "text": "test\n    "
            }]
        },
        {
            "tag": "p",
            "children": [{
                "text": "foo\n    "
            }]
        }
    ]
}

// var ast = parse(html.trim(), {
//     preserveWhitespace: false,
// })

// console.log(JSON.stringify(ast, null, 2));

// mount(ast, document.querySelector('#app'))

// console.log('---generate---');
// var code = generate(ast)
// var render = new Function('with (this) { return ' + code + ' }')

// var renderfn = function anonymous() {
//     with(this) {
//         return _c('div', [_c('p', [_v("test")]), _c('p', [_v("foo")])])
//     }
// }
var vm = new Vue({
    el: '#app',
    template: `
        <div>
            <p>test</p>
            <p>foo</p>
        </div>
    `
});