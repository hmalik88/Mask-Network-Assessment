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
        const root = document.querySelector('#' + name);
        const travelDownTree = (el) => {
            children.push(el)
            if (el.parentElement.children.length !== 3) return;
            const elChildren = [...el.parentElement.children[2].children[0].children];
            for (const child of elChildren) {
                travelDownTree(child.children[0])
            }
        }
        travelDownTree(root);
        return children;
    }

    const markChildren = (children) => children.forEach(child => child.checked = true);

    const unmarkChildren = (children) => children.forEach(child => child.checked = false);

    const getSiblings = (el) => {
        const siblingEls = [...el.parentElement.parentElement.children];
        const cleanEls = siblingEls.map(sibling => sibling.children[0]);
        return cleanEls;
    }

    const markParents = () => {
        const root = document.querySelector('#' + name);
        const travelUpTree = (el) => {
            if (el.parentElement.parentElement.parentElement.parentElement.tagName !== 'LI') return;
            const parent = el.parentElement.parentElement.parentElement.parentElement.children[0];
            parent.indeterminate = false;
            const siblings = getSiblings(el);
            const numChecked = siblings.filter(sibling => sibling.checked).length;
            const hasIndeterminate = siblings.some(sibling => sibling.indeterminate === true);
            if (hasIndeterminate) parent.indeterminate = true;
            else if (numChecked === 0) parent.checked = false;
            else if (numChecked > 0 && numChecked < siblings.length) parent.indeterminate = true;
            else if (numChecked === siblings.length) parent.checked = true;
            travelUpTree(parent);
        }
        travelUpTree(root);
    }

    const handleChange = e => {
        const children = getChildren();
        if (e.target.checked) {
            markChildren(children);
        } else {
            unmarkChildren(children);
        }
        markParents();
    }



    return (
        <li>
            <input type="checkbox" id={name} onChange={handleChange} />
            <label htmlFor={name}>{name}</label>
            {hasChildren && (
                <ul>
                    <CheckBoxTree nodes={children} />
                </ul>
            )}
        </li>
    )
}

export default CheckBoxTreeNode;