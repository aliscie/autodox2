import 'tippy.js/dist/tippy.css'
import './App.css'
import React from 'react'
import {
    createAlignPlugin,
    createAutoformatPlugin,
    createBlockquotePlugin,
    createBoldPlugin,
    createCodePlugin,
    createComboboxPlugin,
    createDeserializeCsvPlugin,
    createDeserializeDocxPlugin,
    createDeserializeMdPlugin,
    createDndPlugin,
    createExitBreakPlugin,
    createFontBackgroundColorPlugin,
    createFontColorPlugin,
    createFontSizePlugin,
    createHeadingPlugin,
    createHighlightPlugin,
    createHorizontalRulePlugin,
    createImagePlugin,
    createIndentPlugin,
    createItalicPlugin,
    createJuicePlugin,
    createKbdPlugin,
    createLinkPlugin,
    createListPlugin,
    createMediaEmbedPlugin,
    createMentionPlugin,
    createNodeIdPlugin,
    createNormalizeTypesPlugin,
    createParagraphPlugin,
    createPlateUI,
    createPlugins,
    createResetNodePlugin,
    createSelectOnBackspacePlugin,
    createSoftBreakPlugin,
    createStrikethroughPlugin,
    createSubscriptPlugin,
    createSuperscriptPlugin,
    createTablePlugin,
    createTodoListPlugin,
    createTrailingBlockPlugin,
    createUnderlinePlugin,
    Plate,
} from '@udecode/plate'
import {createExcalidrawPlugin, ELEMENT_EXCALIDRAW, ExcalidrawElement,} from '@udecode/plate-ui-excalidraw'
import {MarkBallonToolbar} from './config/components/Toolbars'
import {withStyledPlaceHolders} from './config/components/withStyledPlaceHolders'
import {withStyledDraggables} from './config/components/withStyledDraggables'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import {CONFIG} from './config/config'
import initialValue from "./initialValue";
import {createPluginFactory} from "@udecode/plate-core";

import createNumbered, {ELEMENT_NUMBERED} from './config/components/numbered/numbered'
import {NumberedElement} from "./config/components/numbered/numberedE";
const id = 'Examples/Playground'

let components = createPlateUI({
    [ELEMENT_EXCALIDRAW]: ExcalidrawElement,
    [ELEMENT_NUMBERED]: NumberedElement,
    // customize your components by plugin key
})
components = withStyledPlaceHolders(components)
components = withStyledDraggables(components)

const RichTextEditor = () => {
    const plugins = createPlugins(
        [
            createParagraphPlugin(),
            createBlockquotePlugin(),
            createTodoListPlugin(),
            createHeadingPlugin(),
            createImagePlugin(),
            createHorizontalRulePlugin(),
            createLinkPlugin(),
            createNumbered(),
            createListPlugin(),
            createTablePlugin(),
            createMediaEmbedPlugin(),
            createExcalidrawPlugin(),
            // createCodeBlockPlugin(),
            createAlignPlugin(CONFIG.align),
            createBoldPlugin(),
            createCodePlugin(),
            createItalicPlugin(),
            createHighlightPlugin(),
            createUnderlinePlugin(),
            createStrikethroughPlugin(),
            createSubscriptPlugin(),
            createSuperscriptPlugin(),
            createFontColorPlugin(),
            createFontBackgroundColorPlugin(),
            createFontSizePlugin(),
            createKbdPlugin(),
            createNodeIdPlugin(),
            createDndPlugin(),
            createIndentPlugin(CONFIG.indent),
            createAutoformatPlugin(CONFIG.autoformat),
            createResetNodePlugin(CONFIG.resetBlockType),
            createSoftBreakPlugin(CONFIG.softBreak),
            createExitBreakPlugin(CONFIG.exitBreak),
            createNormalizeTypesPlugin(CONFIG.forceLayout),
            createTrailingBlockPlugin(CONFIG.trailingBlock),
            createSelectOnBackspacePlugin(CONFIG.selectOnBackspace),
            createComboboxPlugin(),
            createMentionPlugin(),
            createDeserializeMdPlugin(),
            createDeserializeCsvPlugin(),
            createDeserializeDocxPlugin(),
            createJuicePlugin(),
        ],
        {
            components,
        }
    )

    return (
        <DndProvider backend={HTML5Backend}>
            <Plate
                onChange={(V)=>{
                    console.log({V})
                }}
                id={id}
                editableProps={CONFIG.editableProps}
                initialValue={initialValue}
                plugins={plugins}
            >
                {/*<HeadingToolbar>*/}
                {/*  <ToolbarButtons />*/}
                {/*</HeadingToolbar>*/}

                <MarkBallonToolbar/>

                {/*<MentionCombobox items={MENTIONABLES} />*/}
            </Plate>
        </DndProvider>
    )
}

export default RichTextEditor
// const rootElement = document.getElementById('root')
// ReactDOM.render(<Plugins />, rootElement)
