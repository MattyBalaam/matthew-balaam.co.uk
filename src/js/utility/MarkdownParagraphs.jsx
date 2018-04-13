import React, {createElement, cloneElement} from 'react';
import ReactMarkdown, {renderers} from 'react-markdown';
import mapObj from './MapObj';

const BASECLS = 'mkd mkd--';

const createEl = type => props => createElement(type, props, props.children);

const addBemToGetReactElement = getReactEl => props => {
  const el = getReactEl(props);
  const className = [`${BASECLS}${el.type}`,el.props.className].join(' ');
  return cloneElement(el,{className});
}

const addBemToMarkdown = type => addBemToGetReactElement(createEl(type));

const addBemToAll = ([k, v]) => {
  return {[k]: typeof v === 'function' ? addBemToGetReactElement(v) : addBemToMarkdown(v) };
};

const bemRenderers = mapObj(renderers, addBemToAll);

const getCoercedString = v => {
  return typeof v.join === 'function' ? v.join('\n\n') : v;
}

const MarkdownParagraphs = props => {
  return (
    <ReactMarkdown {...props} source={getCoercedString(props.source)} renderers={bemRenderers}/>
  )
}

export default MarkdownParagraphs;