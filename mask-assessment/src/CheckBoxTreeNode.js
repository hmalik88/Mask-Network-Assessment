import React from 'react';
import CheckBoxTree from './CheckBoxTree';

function CheckBoxTreeNode({name, children}) {
    // use the onChange listener to first mark the children
    // make a list of the siblings, check if any are checked
    // if some are then the parent of the siblings should have semi-checked state
    // if all are checked then parent of the siblings should be checked

    //we un-mark the children if its an un-check

    const hasChildren = !!children.length;


    const getChildren = () => {
        const children = [];
        const mainElement = document.querySelector('#' + name);
        const travelDom = (mainElement) => {
            children.push(mainElement)
            if (mainElement.parentElement.children.length !== 3) return;
            const elChildren = [...mainElement.parentElement.children[2].children[0].children];
            for (const child of elChildren) {
                travelDom(child.children[0])
            }
        }
        travelDom(mainElement);
        return children;
    }

    const markChildren = (children) => children.forEach(child => child.checked = true);

    const unmarkChildren = (children) => children.forEach(child => child.checked = false);

    const markParents = () => {

    }

    const handleChange = e => {
        const children = getChildren();
        console.log(children);
        if (e.target.checked) {
            markChildren(children);
        } else {
            unmarkChildren(children);
        }
    }



    return (
        <li>
            <input type="checkbox" id={name} onChange={handleChange} />
            <label for={name}>{name}</label>
            {hasChildren && (
                <ul>
                    <CheckBoxTree nodes={children} />
                </ul>
            )}
        </li>
    )
}

export default CheckBoxTreeNode;