import React from 'react';
import LoginForm from '../components/displays/LoginForm';
import CardList from '../components/cards/CardList';

const Home = () => {
  return (
    <div className='page' style={{ textAlign: 'center' }}>
      <p className='page-title'>Get a bridge!</p>
      <p style={{ fontSize: 20 }}>
        Read/Create the
        <span style={{ color: 'var(--primary-red)' }}> bridges </span>
        from mere lines to the drugs in your playlist
      </p>
      {
        //TODO Remove or use LoginForm
        //<LoginForm />
      }
      <p style={{ fontSize: 28 }}>Sign In</p>
      <CardList />
      <div style={{ marginBottom: 20 }} />
    </div>
  );
};

export default Home;
