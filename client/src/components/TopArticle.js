import React from 'react';
import { Divider } from 'semantic-ui-react'

const TopArticle = (props) =>
  <div>
    <p>{props.index + 1}.</p>
    <a href={props.article.url} target="_blank">{props.article.title}</a>
    <Divider />
  </div>

export default TopArticle
