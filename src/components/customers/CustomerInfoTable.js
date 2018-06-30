import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import detectDomain from '../../utils/detectDomain';
import EditTextProperty from '../common/EditTextProperty';

const CustomerInfoTable = (props) => {
  const { customer } = props;
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
          <TableCell>
            <div className="info-table__actions">
              {customer.socialLink ? detectDomain(customer.socialLink) : noData}
              <EditTextProperty
                id={customer.id}
                title="Nastavi povezavo do socialnega profila"
                label="Socialni profil"
                property={{ socialLink: customer.socialLink }}
                module="customers"
              />
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default CustomerInfoTable;