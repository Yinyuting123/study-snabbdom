import h from './mySnabbdom/h'
import patch from './mySnabbdom/patch'
import {
    init,
    classModule,
    propsModule,
    styleModule,
    eventListenersModule,
} from "snabbdom";
let vnode = h('div', {}, [
    h('p', {}, '牛奶'),
    h('p', {}, '咖啡'),
    h('p', {}, '可乐'),
    h('p', {}, [
        h('span', {}, 'A'),
        // h('span', {}, 'B')
    ])
]);

// 创建出patch函数
// const patch = init([classModule, propsModule, styleModule, eventListenersModule])

// 创建虚拟节点

const myVnode1 = h('ul', {}, [
    h('li', {}, '牛奶'),
    h('li', {}, '咖啡'),
    h('li', {}, [
        h('span', {}, '可乐')
    ])
]);


// 让虚拟节点上树
const container = document.getElementById('container')

patch(container, myVnode1)


const myVnode2 = h('ul', {}, [
    h('li', {}, '牛奶'),
    h('li', {}, '咖啡'),
    h('li', {}, '可乐'),
    h('li', {}, '雪碧')
]);

// patch(container, myVnode1)
