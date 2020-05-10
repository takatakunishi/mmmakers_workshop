import React from 'react';
import { Link } from 'react-router-dom';

const PostWorkTab = () => {
  return (
    <div className="PostWorkTab">
      <Link to="/post">作品を投稿する</Link>
    </div>
  );
}

export default PostWorkTab;
