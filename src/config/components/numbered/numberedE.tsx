import React from 'react';
import {PlateRenderElementProps,} from '@udecode/plate-core';
import {ReactEditor} from "slate-react";
import {Transforms} from "slate";

export const NumberedElement = (props: PlateRenderElementProps) => {
    const {attributes, children, element, editor} = props


    const ch = editor.children
    ch.map((i: any, index: number) => {
        if (i.id == element.id) {
            const prev = ch[index - 1]

            // element.order = prev.order?prev.order+1:1
            const order = prev.order ? prev.order + 1 : 1
            const target: any = document.getElementById(element.id)
            console.log({target})
            const node = target && ReactEditor.toSlateNode(editor, target)
            const path = node && node && ReactEditor.findPath(editor, node)
            path && Transforms.setNodes(editor, {...element, order: order}, {at: path})
            console.log({path})
        }
    })
    return (
        <div id={element.id} {...attributes} >
            {element.order}.{" "}{children}
        </div>
    );
};
