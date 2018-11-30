import React from 'react';
import ReactDOM from 'react-dom';

import { StyledMenu } from './components';
import { renderMarkButton } from './renderers';

class HoverMenu extends React.Component {

  renderMarkButton(type, icon) {
    const { editor } = this.props;

    return renderMarkButton(type, icon, editor);
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
      </StyledMenu>,
      root
    )
  }
}

export default HoverMenu;
