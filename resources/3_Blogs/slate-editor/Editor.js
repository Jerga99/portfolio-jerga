import React from 'react';

import HoverMenu from './HoverMenu';

import { Editor } from 'slate-react';
import { Value } from 'slate';
import { renderMark } from './renderers';

// Create our initial value...
const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: 'A line of text in a paragraph.',
              },
            ],
          },
        ],
      },
    ],
  },
});

// Define a React component renderer for our code blocks.
function CodeNode(props) {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  )
}

function BoldMark(props) {
  return <strong>{props.children}</strong>
}

export default class SlateEditor extends React.Component {
  // Set the initial value when the app is first constructed.
  state = {
    value: initialValue,
    isLoaded: false
  }

  componentDidMount() {
    this.updateMenu();
    this.setState({isLoaded: true});
  }

  componentDidUpdate = () => {
    this.updateMenu();
  }

  // On change, update the app's React state with the new editor value.
  onChange = ({ value }) => {
    this.setState({ value })
  }

  updateMenu = () => {
    const menu = this.menu
    if (!menu) return

    const { value } = this.state
    const { fragment, selection } = value

    if (selection.isBlurred || selection.isCollapsed || fragment.text === '') {
      menu.removeAttribute('style')
      return
    }

    const native = window.getSelection()
    const range = native.getRangeAt(0)
    const rect = range.getBoundingClientRect()
    menu.style.opacity = 1
    menu.style.top = `${rect.top + window.pageYOffset - menu.offsetHeight}px`

    menu.style.left = `${rect.left +
      window.pageXOffset -
      menu.offsetWidth / 2 +
      rect.width / 2}px`
  }

  // Render the editor.
  render() {
    const { isLoaded } = this.state;

    return (
      <React.Fragment>
        { isLoaded &&
          <Editor placeholder="Enter some text..."
                  value={this.state.value}
                  onChange={this.onChange}
                  renderMark={renderMark}
                  renderEditor={this.renderEditor}
                  />
        }
      </React.Fragment>
    )
  }

  renderEditor = (props, editor, next) => {
    const children = next()
    return (
      <React.Fragment>
        {children}
        <HoverMenu innerRef={menu => (this.menu = menu)} editor={editor} />
      </React.Fragment>
    )
  }
}







