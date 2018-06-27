import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Spinner = () => {
  return (
    <div className="spinner-wrapper">
      <CircularProgress size={50} className="spinner" />
    </div>
  )
}

export default Spinner;