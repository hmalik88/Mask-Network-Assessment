import React from 'react';
import CheckBoxTree from './CheckBoxTree';

function CheckBoxTreeNode({name, children}) {

    const hasChildren = !!children.length;
    console.log(name);

    return (
        <li>
            <input type="checkbox" value={name} />
            {hasChildren && (
                <ul>
                    <CheckBoxTree nodes={children} />
                </ul>
            )}
        </li>
    )
}

export default CheckBoxTreeNode;