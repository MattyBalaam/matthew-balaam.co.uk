import React from 'react';
import ReactMarkdown from 'react-markdown';

//toDo: needs to check what kind of element is created before adding className
const root = props => (
    <>
      {props.children.map(child => {
          return {...child, 
            props: {
              ...child.props, 
              className: 'paragraphs__p',
            }
          }
        })
      }
    </>
  )

const MarkdownParagraphs = props => (
    <ReactMarkdown source={props.source} renderers={{root}}/>
)

export default MarkdownParagraphs;