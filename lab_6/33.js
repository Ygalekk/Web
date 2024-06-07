function maskify(cc) {
    return cc.slice(0,-4).replace(/./gi, '#') + cc.slice(-4)
}
