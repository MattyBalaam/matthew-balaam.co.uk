import React, {createElement, cloneElement} from 'react';
import ReactMarkdown, {renderers} from 'react-markdown';
import mapObj from './MapObj';

const BASECLS = 'mkd mkd--';

const addBemToMarkdown = type => props => createElement(type, {...props, className: `${BASECLS}${type}`}, props.children);

const addBemToGetReactElement = getReactEl => props => {
  const el = getReactEl(props);
  const className = `${BASECLS}${el.type}${el.props.className ? ` ${el.props.className}` : null}`
  return cloneElement(el,{className});
}

const addBemToAll = ([k, v]) => {
  return {[k]: typeof v === 'function' ? addBemToGetReactElement(v) : addBemToMarkdown(v) };
};

const bemRenderers = mapObj(renderers, addBemToAll);

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