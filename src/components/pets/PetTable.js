import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SpeakerNotes from '@material-ui/icons/SpeakerNotes';
import red from '@material-ui/core/colors/red';

import selectPets from '../../selectors/pets';

const actionsStyles = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing.unit * 2.5,
  },
}
);

class TablePaginationActions extends React.Component {
  handleFirstPageButtonClick = event => {
    this.props.onChangePage(event, 0);
  };

  handleBackButtonClick = event => {
    this.props.onChangePage(event, this.props.page - 1);
  };

  handleNextButtonClick = event => {
    this.props.onChangePage(event, this.props.page + 1);
  };

  handleLastPageButtonClick = event => {
    this.props.onChangePage(event, Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1), );
  };

  render() {
    const { classes, count, page, rowsPerPage, theme } = this.props;
    return (
      <div className={classes.root}>
        <IconButton
          onClick={this.handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="First Page" >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={this.handleBackButtonClick}
          disabled={page === 0}
          aria-label="Previous Page" >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={this.handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Next Page" >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={this.handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Last Page" >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }
}

TablePaginationActions.propTypes = {
  classes: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  theme: PropTypes.object.isRequired,
};

const TablePaginationActionsWrapped = withStyles(actionsStyles, { withTheme: true })(TablePaginationActions, );

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  info: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    margin: '0.5rem 1rem',
    padding: '0.5rem',
    color: '#fff',
    backgroundColor: red[300],
  },
  link: {
    color: theme.palette.text.primary,
  },
  gender: {
    padding: '0.5rem',
    width: 35
  }
});

class PetTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0, rowsPerPage: 8,
    };
  }

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({
      rowsPerPage: event.target.value
    });
  };

  render() {
    const { classes, pets } = this.props;
    const { rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, pets.length - page * rowsPerPage);

    return (
      <div>
        {
          pets.length === 0 ? (
            <div> <span>V bazi ni nobenega varovanca</span> </div>
          ) : (
              <Paper className={classes.root}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Hišni ljubljenček</TableCell>
                      <TableCell>Pasma</TableCell>
                      <TableCell>Starost</TableCell>
                      <TableCell>Spol</TableCell>
                      <TableCell>Opombe</TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {
                      pets
                        .sort((a, b) => (b.name > a.name ? -1 : 1))
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(n => {
                          return (<TableRow key={n.id}>
                            <TableCell component="th" scope="row" className={classes.info}>
                              {n.type ? (
                                <Avatar src={`/images/svg/${n.type}.svg`} className={classes.avatar} />
                              ) : ('')}
                              <Link to={`/pets/${n.id}`} className={classes.link}>{n.name}</Link>
                            </TableCell>
                            <TableCell>{n.breed}</TableCell>
                            <TableCell>{n.birth}</TableCell>
                            <TableCell>{n.gender ?
                              (<img src={`/images/svg/${n.gender}.svg`} className={classes.gender} />) : (
                                ''
                              )}</TableCell>
                            <TableCell>{n.notes && <SpeakerNotes />}</TableCell>
                            <TableCell><MoreVertIcon /></TableCell>
                          </TableRow>
                          );
                        })
                    }
                    {
                      emptyRows > 0 && (
                        <TableRow style={{ height: 65 * emptyRows }}>
                          <TableCell colSpan={6} />
                        </TableRow>)
                    }
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TablePagination
                        colSpan={6}
                        count={pets.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={this.handleChangePage}
                        onChangeRowsPerPage={this.handleChangeRowsPerPage}
                        ActionsComponent={TablePaginationActionsWrapped}
                        rowsPerPageOptions={[8, 12, 16]}
                        labelRowsPerPage='Zapisov na stran:'
                      />
                    </TableRow>
                  </TableFooter>
                </Table>
              </Paper>
            )
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  pets: selectPets(state.pets, state.filters)
});

PetTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(PetTable);