const initialValue = [
    {
        "type": "h1",
        "children": [
            {
                "text": "Title is here."
            }
        ]
    },
    {
        "type": "numbered",
        "children": [
            {
                "text": "AAAA "
            }
        ],
        "id": 1602165744171
    },
    {
        "type": "numbered",
        "children": [
            {
                "text": "BBBBB"
            }
        ],
        "id": 1602165204171
    },
    {
        "type": "numbered",
        "children": [
            {
                "text": "C "
            }
        ],
        "id": 1602162704171
    },
    {
        "type": "numbered",
        "children": [
            {
                "text": "D is "
            }
        ],
        "id": 1602135704171
    },
    {
        "type": "p",
        "children": [
            {
                "text": "paragraphe is here"
            }
        ],
        "id": 1642165744171
    },
    {
        "type": "ol",
        "children": [
            {
                "type": "li",
                "children": [
                    {
                        "type": "lic",
                        "id": 1642165748085,
                        "children": [
                            {
                                "text": "item one"
                            }
                        ]
                    }
                ],
                "id": 1642165751561
            },
            {
                "type": "li",
                "children": [
                    {
                        "type": "lic",
                        "children": [
                            {
                                "text": "item two "
                            }
                        ],
                        "id": 1642165753284
                    }
                ],
                "id": 1642165753284
            },
            {
                "type": "li",
                "children": [
                    {
                        "type": "lic",
                        "children": [
                            {
                                "text": "item three"
                            }
                        ],
                        "id": 1642165755667
                    }
                ],
                "id": 1642165755667
            }
        ],
        "id": 1642165751559
    },
    {
        "type": "p",
        "children": [
            {
                "text": ""
            }
        ],
        "id": 1642165740922
    }
]
// const convertHtmlToPlate = (html) => {
//   const editor = createEditorPlugins({ plugins: plugins })
//
//   return deserializeHTMLToDocumentFragment(editor, {
//     plugins: plugins,
//     element: html,
//   })
// }
//
// const initalContent = convertHtmlToPlate(`
// <pre class="slate-CodeBlockElement">
//   <code>
//     const a = 'hello';
//
//     const b = 'world';
//   </code>
// </pre>
//
// <blockquote class="slate-BlockquoteElement">
// Hello
// World!
// </blockquote>
// `)
export default initialValue