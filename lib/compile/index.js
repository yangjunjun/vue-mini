const compile = (template) => {
    var ast = parse(template.trim(), {
        preserveWhitespace: false,
    })
    var code = generate(ast)
    var render = new Function('with (this) { return ' + code + ' }')
    return render
}
