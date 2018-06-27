import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const LoadingPage = () => (
  <div className="loader">
    <div>
      <CircularProgress size={50} />
    </div>
    <div>Nalagam...</div>
  </div>
);

export default LoadingPage;