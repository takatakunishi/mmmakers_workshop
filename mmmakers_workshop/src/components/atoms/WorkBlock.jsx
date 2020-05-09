import React from 'react';
import '../../styles/atoms/WorkBlock.css';
import { useHistory } from 'react-router-dom';

const WorkBlock = (props) => {
  const { auth, title, url, path } = props;
  const history = useHistory();

  const handleClick = () => {
    history.push({
      pathname: '/WorkDetail/' + path,
      state: {
        url: url,
        path: path
      }
    });
  };

  return (
    <div className="WorkBlock" onClick={handleClick}>
      <img src={url} />
      <a className="worktitle">{title}</a>
      <a className="workauther">{auth}</a>
    </div>
  );
}

export default WorkBlock;
