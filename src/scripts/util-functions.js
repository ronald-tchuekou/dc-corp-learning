/**
 * @param {HTMLElement} elt Element to target.
 * @param {any} [callback=undefined] Function to execute when click outside of element.
 */
export const OnOutsideClickListener = (elt, callback) => {
    if (elt === null || elt === undefined) return
    window.addEventListener('mouseup', (e) => {
        let children = elt.querySelectorAll('*')
        let target = e.target
        let is_inside = false
        let index = 0
        while (!is_inside && index < children.length) {
            is_inside = children[index] === target
            index++
        }
        if (!is_inside) {
            if (callback !== undefined) callback()
            else elt.remove()
        }
    })
}
