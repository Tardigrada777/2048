
/**Find element in DOM by className or create new and returns it.
 * 
 * @param className ClassName of tje element in DOM.
 */
export function getElementByClassName(className: string): Element {
    const el: Element | null = document.querySelector(className);
    if (el === null) {
        const el: Element = document.createElement('div');
        document.body.appendChild(el);
        return el;
    }
    return el;
}