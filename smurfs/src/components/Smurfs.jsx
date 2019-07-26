import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import { getSmurfs, deleteSmurf } from '../actions';

import { Link } from 'react-router-dom';

import Smurf from './Smurf';

import './Smurfs.css';

const Smurfs = props => {

  const fetchSmurfs = () => {
    props.getSmurfs();
  }

  const deleteSmurf = id => {
    props.deleteSmurf(id);
  }

  // Fetch smurfs on start
  useEffect(fetchSmurfs, [props.deleting])

  return (
    <div className='smurf-list'>
      {
        props.gettingSmurfs ? <p>Loading smurfs...</p> : props.getSmurfsError ? <p className='error'>{props.getSmurfsError}</p>
        : props.smurfs.length > 0 ? props.smurfs.map(smurf => {
          return <Smurf key={smurf.id} deleteSmurf={deleteSmurf} deleting={props.deleting === smurf.id} smurf={smurf} />
        }) : <p>This village is empty! <Link to='/add'>Add some smurfs</Link> to populate it!</p>
      }
    </div>
  );
};

const mapStateToProps = state => ({...state});

export default connect(mapStateToProps, { getSmurfs, deleteSmurf })(Smurfs);