import vnode from './vnode.js';

// 编写低配的h函数，必须接受三个参数:标签，数据对象，c【text/[]/h()】
// 重载功能较弱
// 也就是说，调用的时候形态必须是下面的三种之一：
// 形态① h('div', {}, '文字')
// 形态② h('div', {}, [])
// 形态③ h('div', {}, h())
// 形态2举例：
// h('ul', {}, [ 
// 	h('li', {}, '牛奶'),
// 	h('li', {}, '咖啡'),
// 	h('li', {}, '可乐')
// ]);
export default function (sel, data, c) {
    if (arguments.length !== 3) {
        throw new Error('必须传入三个参数')
    }
    // 检查参数c
    if (typeof c === 'string' || typeof c === 'number') {
        // 形态①
        return vnode(sel, data, undefined, c, undefined)
    } else if (Array.isArray(c)) {
        // 形态②
        let children = []
        // 遍历
        for (let i = 0; i < c.length; i++) {
            // 检查c[i]必须是一个对象(h函数调用的结果)
            if (!(typeof c[i] === 'object' && c[i].hasOwnProperty('sel'))) {
                throw new Error('传入的数组参数中有项不是h函数')
            }
            // 直接放入children中
            children.push(c[i])
        }
        return vnode(sel, data, children, undefined, undefined)
    } else if (typeof c === 'object' && c.hasOwnProperty('sel')) {
        // 形态③
        let children = [c]
        return vnode(sel, data, children, undefined, undefined)
    } else {
        throw new Error('传入的第三个参数类型不对')
    }
}