import React, { useState } from 'react';

export default function LikeImage() {
  const [likeImageCounter, setLikeImageCounter] = useState(0);

  const handleLikeImageCount = () => {
    setLikeImageCounter(likeImageCounter + 1);
    console.log(likeImageCounter,"like");
  };

  return (
    <div>
      <button onClick={handleLikeImageCount}>
        Like Image {likeImageCounter}
      </button>
    </div>
  );
}
