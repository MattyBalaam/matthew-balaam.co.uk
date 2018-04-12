import React, {createElement} from 'react';
import ReactMarkdown, {renderers} from 'react-markdown';
import mapObj from './MapObj';

const BASECLS = 'mkd mkd--';

const addBemToMarkdown = type => props => createElement(type, {...props, className: `${BASECLS}${type}`}, props.children);

const addBemToFunc = oldFunc => props => {
  const component = oldFunc(props); 
  return {
    ...component, 
    props: {
      ...component.props,
      className: `${BASECLS}${component.type}`,
    }
  };
}

const bemRenderers = mapObj(renderers, ([k, v]) => {
    if (typeof v === 'function') {
      v = addBemToFunc(v)
    } else {
      v = addBemToMarkdown(v);
    }
    return {[k]: v};
  }
);


const MarkdownParagraphs = props => {
  let source = props.source;
  if (typeof source.reduce === 'function') {
    source = source.reduce((str, val) => str + '\n\n' + val );
  } 
  return (
      <ReactMarkdown source={source} renderers={bemRenderers}/>
  )
}

export default MarkdownParagraphs;