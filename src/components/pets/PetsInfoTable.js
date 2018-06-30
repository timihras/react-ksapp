import React from 'react';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import replaceValues from '../../utils/replaceValues';
import ChangeOwnerDialog from './ChangeOwnerDialog';

const PetsInfoTable = (props) => {
  const { pet } = props;
  const noData = <i>Ni podatka</i>;

  return (
    <Table>
      <TableBody>
        <TableRow >
          <TableCell component="th" scope="row">Ime</TableCell>
          <TableCell>{pet.name}</TableCell>
        </TableRow>
        <TableRow >
          <TableCell component="th" scope="row">Vrsta</TableCell>
          <TableCell>{replaceValues(pet.type)}</TableCell>
        </TableRow>
        <TableRow >
          <TableCell component="th" scope="row">Spol</TableCell>
          <TableCell>{pet.gender ? replaceValues(pet.gender) : noData}</TableCell>
        </TableRow>
        <TableRow >
          <TableCell component="th" scope="row">Starost</TableCell>
          <TableCell>{pet.birth ? pet.birth : noData}</TableCell>
        </TableRow>
        <TableRow >
          <TableCell component="th" scope="row">Lastnik</TableCell>
          <TableCell>
            <div className="info-table__actions">
              <Link to={`/customers/${pet.owner}`}>
                {pet.ownerFullName ? pet.ownerFullName : noData}
              </Link>
              <ChangeOwnerDialog pet={{ id: pet.id, name: pet.name }} owner={{ id: pet.owner, name: pet.ownerFullName }} />
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default PetsInfoTable;