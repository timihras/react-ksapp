import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  }
});

const CustomerInfoTable = (props) => {
  const { classes, customer } = props;
  const noData = <i>Ni podatka</i>;
  return (
    <Table>
      <TableBody>
        <TableRow >
          <TableCell component="th" scope="row">Ime in priimek</TableCell>
          <TableCell>{customer.firstName} {customer.lastName ? customer.lastName : ''}</TableCell>
        </TableRow>
        <TableRow >
          <TableCell component="th" scope="row">Naslov</TableCell>
          <TableCell>
            <div>{customer.address ? customer.address : noData}</div>
            <div>{customer.post ? customer.post : ''} {customer.city ? customer.city : ''}</div>
          </TableCell>
        </TableRow>
        <TableRow >
          <TableCell component="th" scope="row">Telefon</TableCell>
          <TableCell>{customer.phoneNumber ? customer.phoneNumber : noData}</TableCell>
        </TableRow>
        <TableRow >
          <TableCell component="th" scope="row">Email</TableCell>
          <TableCell>{customer.email ? customer.email : noData}</TableCell>
        </TableRow>
        <TableRow >
          <TableCell component="th" scope="row">Socialni profil</TableCell>
          <TableCell>{noData}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

CustomerInfoTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomerInfoTable);