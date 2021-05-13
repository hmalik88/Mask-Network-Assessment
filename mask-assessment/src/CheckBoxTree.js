import React from 'react';
import CheckBoxTreeNode from './CheckBoxTreeNode';

function CheckBoxTree({nodes}) {

    return (
        <div>
            {nodes.map(node => <CheckBoxTreeNode name={node.name} children={node.children} />)}
        </div>
    )
}   