import vnode from './vnode';
import createElement from './createElement'

export default function (oldVnode, newVnode) {
    // 判断第一个参数是否为虚拟节点，不是则包装为虚拟节点
    if (oldVnode.sel === '' || oldVnode.sel === undefined) {
        oldVnode = vnode(oldVnode.tagName.toLowerCase(), {}, [], undefined, oldVnode)
    }
    // 判断oldVnode和newVnode是否为同一个虚拟节点【比较key和sel】
    if (oldVnode.key == newVnode.key && oldVnode.sel == newVnode.sel) {

    } else {
        // 直接全部删除，重新创建节点
        console.log('直接全部删除，重新创建节点');
        let newVnodeElm = createElement(newVnode)
        // 将新创建的孤儿节点上树
        if (oldVnode.elm.parentNode != undefined && newVnodeElm) {
            oldVnode.elm.parentNode.insertBefore(newVnodeElm, oldVnode.elm)
            // 删除老节点
            oldVnode.elm.remove()
        }
    }
}