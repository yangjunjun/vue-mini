# vue-mini

## 原理

```js
var ast = parse(template);
var code = generate(ast);
```

## 整体流程


### parse

1. 支持属性
2. 支持差值 {{}}


### patch

- 支持 mount
- 支持 更新

## 问题

1. new Function 报错
`_c('div', [_v("\n            "),_c('p', [_v("test")]),_v("\n            "),_c('p', [_v("foo")]),_v("\n        ")])`

```js
(function test () {
   var str = `_v("\n            ")`
   return new Function(`return ${str}`)
})()

var code = `return 'a\\nbc'`
(new Function(code))()

var str = 'a\nbc'
var code = `return ${JSON.stringify(str)}`
(new Function(code))()
```