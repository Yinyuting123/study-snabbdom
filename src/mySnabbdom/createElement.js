// 创建真实DOM,是孤儿节点不进行插入
export default function createElement (vnode) {
    // 创建dom节点，此时该节点还是孤儿节点
    let domNode = document.createElement(vnode.sel)
    // 有子节点还是有文本
    // 是文本节点就不用递归
    if ((vnode.text != '' || vnode.text != undefined) &&
        (vnode.children == undefined || vnode.children.length == 0)) {
        // 内部是文字
        domNode.innerText = vnode.text
        
    } else if(Array.isArray(vnode.children) && vnode.children.length > 0){
        // 内部是子节点就要递归创建
        for (let child of vnode.children) {
            domNode.appendChild(createElement(child))
        }
    } 
    // 补充elm属性
    vnode.elm = domNode
    // 返回elm, elm属性是一个纯DOM对象
    return vnode.elm
}