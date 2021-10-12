var option01 = {
    el: '#app',
    template: `
        <div>
            <p>test</p>
            <p>foo</p>
        </div>
    `
}
var option02 = {
    el: '#app',
    data () {
        return {
            msg: 'world',
            bar: 'bar 01',
        }
    },
    template: `
        <div>
            <p>hello {{msg}} foo {{bar}}</p>
        </div>
    `
}
var vm = new Vue(option02);