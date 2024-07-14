import React, { useEffect } from 'react';
import BookInfo from './BookInfo';
import BooksList from './BooksList';

import './book.css';
import { useDispatch } from 'react-redux';
import { getBooks } from '../../Redux/BookSlice';

const PostContainer = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBooks())
  }, [dispatch]);

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
