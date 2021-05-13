import React from 'react';
import CheckBoxTreeNode from './CheckBoxTreeNode';

function CheckBoxTree({nodes}) {

    return (
        <ul>
            {nodes.map(node => <CheckBoxTreeNode name={node.name} children={node.children} />)}
        </ul>
    )
}   

export default CheckBoxTree;