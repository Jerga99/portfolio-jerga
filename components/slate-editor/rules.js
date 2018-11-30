const BLOCK_TAGS = {
  blockquote: 'block-quote',
  p: 'paragraph',
  ul: 'bulleted-list',
  li: 'list-item',
  ol: 'numbered-list',
  h1: 'heading-one',
  h2: 'heading-two'
}

// Add a dictionary of mark tags.
const MARK_TAGS = {
  em: 'italic',
  strong: 'bold',
  u: 'underlined',
  code: 'code'
}

export const rules = [
  {
    deserialize(el, next) {
      const type = BLOCK_TAGS[el.tagName.toLowerCase()]
      if (type) {
        return {
          object: 'block',
          type: type,
          nodes: next(el.childNodes),
        }
      }
    },
    serialize(obj, children) {
      if (obj.object == 'block') {
        switch (obj.type) {
        case 'paragraph':
          return <p>{children}</p>
        case 'block-quote':
          return <blockquote>{children}</blockquote>
        case 'bulleted-list':
          return <ul>{children}</ul>
        case 'heading-one':
          return <h1>{children}</h1>
        case 'heading-two':
          return <h2>{children}</h2>
        case 'list-item':
          return <li>{children}</li>
        case 'numbered-list':
          return <ol>{children}</ol>
        }
      }
    },
  },
// Add a new rule that handles marks...
  {
    deserialize(el, next) {
      const type = MARK_TAGS[el.tagName.toLowerCase()]
      if (type) {
        return {
          object: 'mark',
          type: type,
          nodes: next(el.childNodes),
        }
      }
    },
    serialize(obj, children) {
      if (obj.object == 'mark') {
        switch (obj.type) {
          case 'bold':
            return <strong>{children}</strong>
          case 'italic':
            return <em>{children}</em>
          case 'underlined':
            return <u>{children}</u>
          case 'code':
            return <code>{children}</code>
        }
      }
    },
  },
]

