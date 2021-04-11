import { error500 } from '../block/error';

function render(query:string, block: any) {
    const root: any = document.querySelector(query);
    root.appendChild(block.getElement());
    return root;
}

render("#root", error500);