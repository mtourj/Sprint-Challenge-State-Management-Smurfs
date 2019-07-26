import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import { getSmurfs } from '../actions';

import Smurf from './Smurf';

import './Smurfs.css';

const Smurfs = props => {

  const fetchSmurfs = () => {
    props.getSmurfs();
  }

  // Fetch smurfs on start
  useEffect(fetchSmurfs, [])

  return (
    <div className='smurf-list'>
      {
        props.gettingSmurfs ? <p>Loading smurfs...</p> : props.getSmurfsError ? <p className='error'>{props.getSmurfsError}</p>
        : props.smurfs.map(smurf => {
          return <Smurf key={smurf.id} smurf={smurf} />
        })
      }
    </div>
  );
};

const mapStateToProps = state => ({...state});

export default connect(mapStateToProps, { getSmurfs })(Smurfs);