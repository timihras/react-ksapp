import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import events from './demoEvents';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const styles = {
  root: {
    height: 'calc(100vh - 100px)',
  },
}

const messages = {
  previous: '<',
  next: '>',
  today: 'danes',
  month: 'mesec',
  week: 'teden',
  day: 'dan',
  showMore: total => `še ${total}`
}

const eventStyle = (event, start, end, isSelected) => {
  var backgroundColor = '#' + event.hexColor;
  var style = {
    backgroundColor: backgroundColor
  };
  return {
    style: style
  };
}

const EventsDashboard = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <BigCalendar
        events={events}
        step={60}
        showMultiDayTimes
        defaultDate={new Date()}
        messages={messages}
        culture='sl'
        popup
        selectable
        onSelectEvent={event => alert(event.title)}
        eventPropGetter={(eventStyle)}
      />
    </div>
  );
};

EventsDashboard.propTypes = ({
  classes: PropTypes.object.isRequired
})

export default withStyles(styles)(EventsDashboard);