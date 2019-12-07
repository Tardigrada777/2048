
/**Find element in DOM by className or create new and returns it.
 * 
 * @param className ClassName of tje element in DOM.
 */
export function getElementByClassName(className: string): Element {
    const el: Element | null = document.getElementsByClassName(className)[0];
    if (el === null) {
        const el: Element = document.createElement('div');
        el.classList.add(className);
        document.body.appendChild(el);
        return el;
    }
    return el;
}