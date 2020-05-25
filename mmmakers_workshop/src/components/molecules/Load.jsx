import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../../styles/molecules/Load.css'

const Load = (props) => {
  const { showWord } = props;
  const load = useSelector(state => state.content.load);


  return (
    <div className="Load" >
      <div id="my-spinner" className="box loaded" ref={
        node => {
          if (node) {
            if (!load) {
              // .box に .loaded を追加してローディング表示を消す
              node.classList.add('loaded');
            } else {
              // spinner.classList.add('loaded');
              node.classList.remove('loaded');
            }
          }
        }
      }>
        <div className="spinner type1">
          <span>{showWord}...</span>
        </div>
      </div>
    </div>
  );
}

export default Load;
