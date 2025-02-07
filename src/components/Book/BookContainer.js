import React from 'react';
import BookInfo from './BookInfo';
import BooksList from './BooksList';

import './book.css';

const PostContainer = () => {
  return (
    <>
      <hr className='my-5' />
      <div className='row'>
        <div className='col'>
          <BooksList />
        </div>
        <div className='col side-line'>
          <BookInfo />
        </div>
      </div>
    </>
  );
};

export default PostContainer;
