import React from 'react';
import { List, Image } from 'semantic-ui-react';
import { truncate } from 'lodash';
import placeholder from '../assets/placeholder.png';

export default function Books({ children: books, onSelect }) {
  const renderBook = book => {
    const {
      id,
      volumeInfo: { title, description, authors, imageLinks = {} },
    } = book;
    const { thumbnail = null } = imageLinks;
    const ellipsedDescription = truncate(description, {
      length: 500,
      separator: ' ',
      omission: ' [...]',
    });
    return (
      <List.Item key={id} onClick={() => onSelect(id)}>
        <List.Content>
          <Image rounded size="small" floated="left" src={thumbnail || placeholder} />
          <List.Header>{title}</List.Header>
          <List.Description>
            <p>{`by ${authors.join(', ')}`}</p>
            <p>{ellipsedDescription}</p>
          </List.Description>
        </List.Content>
      </List.Item>
    );
  };
  return (
    <List divided relaxed>
      {books.map(book => renderBook(book))}
    </List>
  );
}
