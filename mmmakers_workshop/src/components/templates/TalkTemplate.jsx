import React from 'react';
import '../../styles/templates/TalkTemplate.css';
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import TalkGroupList from '../organisms/TalkGroupList'
import TalkDisplay from '../organisms/TalkDisplay'

const TalkTemplate = () => {
  return (
    <div className="TalkTemplate">
      <div className = "TT-container">
        <Header />
        <div className = "TT-contents">
          <TalkGroupList />
          <TalkDisplay />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default TalkTemplate;
