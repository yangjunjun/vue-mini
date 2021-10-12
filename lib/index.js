class Vue {
    constructor (options = {}) {
        this.$options = options
        this._init()
    }
    _init () {
        this.$mount(this.$options.el)
    }
    _c (tag, children) {
        return {
            tag,
            children,
        }
    }
    _v (text) {
        return {
            text,
        }
    }
    // 返回 vnode
    _render () {
        const vm = this;
        const { render } = vm.$options;
        var vnode = render.call(vm);
        return vnode;
    }
    _update (vnode) {
        const vm = this
        const prevEl = vm.$el
        const prevVnode = vm._vnode
        vm._vnode = vnode
        if (!prevVnode) {
            vm.$el = patch(prevEl, vnode)
        } else {
            // todo
            vm.$el = patch(prevVnode, vnode)
        }
    }
    $mount (el) {
        const vm = this;
        const options = this.$options
        options.$el = document.querySelector(el)
        vm.$el = options.$el
        if (!options.render) {
            options.render = compile(this.$options.template)
        }
        const updateComponent = () => {
            vm._update(vm._render())
        }
        updateComponent()
    }
}