const compile = (template) => {
    var ast = parse(template.trim(), {
        preserveWhitespace: false,
    })
    console.log('ast', ast)
    var code = generate(ast)
    console.log('code', code)
    var render = new Function('with (this) { return ' + code + ' }')
    return render
}
