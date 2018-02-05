import React from 'react';
import { parseDate2 } from '../services/utils';
import { Item } from 'semantic-ui-react'

const News = (props) => {
  const { title, description, publishedAt,urlToImage } = props.article
  const source = props.article.source.name
  const date = parseDate2(publishedAt)
  return (
    <Item>
      <Item.Image size='large' src={urlToImage} />
        <Item.Content>
          <Item.Header className="news-header" as='a'>{title}</Item.Header>
          <p>{source}</p>
          <Item.Description>
            <p>{description}</p>
            <p>{date}</p>
          </Item.Description>
        </Item.Content>
    </Item>
  )
}


export default News
