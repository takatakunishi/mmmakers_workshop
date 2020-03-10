import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/molecules/MessageTab.css';

const MessageTab = () => {
  return (
    <div className = "MessageTab">
      <Link to="/talk">MessageTab</Link>
    </div>
  )
}

export default MessageTab;
