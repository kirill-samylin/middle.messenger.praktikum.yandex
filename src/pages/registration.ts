import { signUp } from './../block/popup/popup';

function render(query:string, block: any) {
    const root: any = document.querySelector(query);
    root.appendChild(block.getElement());
    return root;
}

render("#root", signUp);