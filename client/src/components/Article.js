import React from 'react';
import RemoveArticleButton from './RemoveArticleButton';
import { Card, Image } from 'semantic-ui-react';
import { parseDate2 } from '../services/utils'
import ArticleModal from './ArticleModal'


const Article = (props) =>
  <div>
    <Card style={style}>
      <Image src={props.news.url_image}/>
      <Card.Content>
        <Card.Header>
          {props.news.title}
        </Card.Header>
        <Card.Meta>
          <span>{props.news.source}</span>
          <span className='date'>{parseDate2(props.news.published_at)}</span>
        </Card.Meta>
        <Card.Description>
          {props.news.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <ArticleModal article={props.news} />
        <RemoveArticleButton article={props.news} fetchSavedArticles={props.fetchSavedArticles} />
      </Card.Content>
    </Card>
  </div>

  const style = {
    float: 'left',
    padding: '10px',
    marginTop: '10px',
    marginBottom: '40px',
    marginLeft: '12px',
    margin: '1em'
  }


export default Article
