import React from 'react';
import CheckBoxTreeNode from './CheckBoxTreeNode';

function CheckBoxTree({nodes}) {

    return (
        <ul>
            {nodes.map((node, i) => <CheckBoxTreeNode key={i} name={node.name} children={node.children} />)}
        </ul>
    )
}   

export default CheckBoxTree;