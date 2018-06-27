import React from 'react';
import Button from '@material-ui/core/Button';

const DashboardPage = () => (
  <div className="page-header">
    <div className="content-container">
      <h1 className="page-header__title">Dobrodošel/a</h1>
      <Button variant="contained" color="primary">
        Hello World
    </Button>
    </div>
  </div>
);

export default DashboardPage;