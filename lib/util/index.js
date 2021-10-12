function isUndef(v) {
    return v === undefined || v === null
}

function isDef(v) {
    return v !== undefined && v !== null
}

const warn = function warn (msg) {
    console.error(`[parse error] : ${msg}`)
}