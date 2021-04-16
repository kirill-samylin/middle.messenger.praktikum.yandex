type TRoot = HTMLElement | null;
type TClass = {
    getContent: Function,
    getElement: Function,
};
type TElements = Array<TClass>;

function getRoot(selector:string):TRoot {
    const root: TRoot = document.querySelector(selector);
    if (!root) {
        console.error(`Блока c таким селектором: ${selector}, не существует!`);
        return null;
    }
    return root;
}
export function renderContents(selector:string, contents: TElements):void {
    const root = getRoot(selector);
    if (!root) return;
    let context = '';
    for (let i=0; i<contents.length;i++) {
        context+= contents[i].getContent();
    }
    root.innerHTML = context;
}

export function renderElements(selector:string, elements: TElements):void {
    const root = getRoot(selector);
    if (!root) return;
    for (let i=0; i<elements.length;i++) {
        root.appendChild(elements[i].getElement());
    }
}