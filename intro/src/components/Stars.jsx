import React from 'react';
import Star from './Star';
import './stars.css';
import PropTypes from 'prop-types';
//var shortid = require('shortid');
import shortid from 'shortid';

export default function Stars(props) {
  if (props.count < 1 || props.count > 5) {
    return null
  }

  let starsCount = [];

  for (let i = 0; i < props.count; i++) {
    starsCount.push('');
  }

  let starsId = starsCount.map((item) => ({
    id: shortid.generate(),
    value: item,
  }));

  return (
    <ul className="card-body-stars">
      {starsId.map(o => <Star key={o.id}/>)}
    </ul>
  )
}

Stars.defaultProps = {
  count: 0,
}

Stars.propTypes = {
  count: PropTypes.number,
}
