import React from 'react';
import ReactDOM from 'react-dom';

import { StyledMenu } from './components';
import { renderMarkButton, renderBlockButton } from './renderers';

class HoverMenu extends React.Component {

  renderMarkButton(type, icon) {
    const { editor } = this.props;
    return renderMarkButton(type, icon, editor);
  }

  renderBlockButton(type, icon) {
    const { editor } = this.props;
    return renderBlockButton(type, icon, editor);
  }

  render() {
    const { className, innerRef, editor } = this.props
    const root = window.document.getElementById('__next')

    return ReactDOM.createPortal(
      <StyledMenu className={className} innerRef={innerRef}>
        {this.renderMarkButton('bold', 'format_bold')}
        {this.renderMarkButton('italic', 'format_italic')}
        {this.renderMarkButton('underlined', 'format_underlined')}
        {this.renderMarkButton('code', 'code')}
        {this.renderBlockButton('heading-one', 'looks_one')}
        {this.renderBlockButton('heading-two', 'looks_two')}
        {this.renderBlockButton('block-quote', 'format_quote')}
        {this.renderBlockButton('numbered-list', 'format_list_numbered')}
        {this.renderBlockButton('bulleted-list', 'format_list_bulleted')}
      </StyledMenu>,
      root
    )
  }
}

export default HoverMenu;
