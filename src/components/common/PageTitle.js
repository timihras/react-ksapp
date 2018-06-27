import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

export const PageTitle = (props) => (
  <div className="page-header">
    <Typography variant="display1" gutterBottom>
      {props.title}
    </Typography>
    <Typography gutterBottom className="breadcrumbs">
      <Link to={"/"}>Domov</Link> <span>/</span> {props.title}
    </Typography>
  </div>
);

export default PageTitle;