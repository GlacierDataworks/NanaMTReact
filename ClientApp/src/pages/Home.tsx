import React from 'react';
import NanaGraphic from '../components/NanaGraphic';

const Home: React.FC = () => {
  return (
    <div style={{ paddingLeft: 240, paddingTop: 40, maxWidth: 800, margin: '0 auto' }}>
      <NanaGraphic />
      <h1>Welcome to Nana of Montana!</h1>
      <p>Your journey to becoming a Nana starts here!</p>
      <p>
        A Nana isn’t just a grandmother, she’s a super grandmother—with wisdom, warmth, and fun!
        Discover recipes, stories, shop for unique gifts, and more.
      </p>
    </div>
  );
};

export default Home;