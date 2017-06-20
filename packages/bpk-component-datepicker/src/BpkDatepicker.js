import BpkInput, { withOpenEvents } from 'bpk-component-input';
import BpkModal from 'bpk-component-modal';
import BpkPopover from 'bpk-component-popover';
import { cssModules } from 'bpk-react-utils';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import BpkBreakpoint, { BREAKPOINTS } from 'bpk-component-breakpoint';
import BpkCalendar, { CustomPropTypes } from 'bpk-component-calendar';

import STYLES from './bpk-datepicker.scss';

const getClassName = cssModules(STYLES);

const Input = withOpenEvents(BpkInput);

class BpkDatepicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.onOpen = this.onOpen.bind(this);
    this.onClose = this.onClose.bind(this);
    this.handleDateSelect = this.handleDateSelect.bind(this);
  }

  onOpen() {
    this.setState({
      isOpen: true,
    });
  }

  onClose() {
    this.setState({
      isOpen: false,
    });
  }

  handleDateSelect(dateObj) {
    this.setState({
      isOpen: false,
    });
    if (this.props.onDateSelect) {
      this.props.onDateSelect(dateObj);
    }
  }

  render() {
    const {
      changeMonthLabel,
      closeButtonText,
      date,
      dateModifiers,
      daysOfWeek,
      formatDate,
      formatDateFull,
      formatMonth,
      getApplicationElement,
      id,
      inputProps,
      markOutsideDays,
      markToday,
      maxDate,
      minDate,
      onMonthChange,
      showWeekendSeparator,
      title,
      weekStartsOn,
      ...rest
    } = this.props;

    // The following props are not used in render
    delete rest.onDateSelect;

    const inputComponent = (
      <Input
        id={id}
        name={`${id}_input`}
        value={date ? formatDate(date) : ''}
        className={getClassName('bpk-datepicker__input')}
        aria-live="assertive"
        aria-atomic="true"
        aria-label={formatDateFull(date)}
        onChange={() => null}
        onOpen={this.onOpen}
        isOpen={this.state.isOpen}
        {...inputProps}
      />
    );

    const calendarComponent = (
      <BpkCalendar
        className={getClassName('bpk-datepicker__calendar')}
        changeMonthLabel={changeMonthLabel}
        date={date}
        dateModifiers={dateModifiers}
        daysOfWeek={daysOfWeek}
        formatDateFull={formatDateFull}
        formatMonth={formatMonth}
        id={`${id}-calendar`}
        markOutsideDays={markOutsideDays}
        markToday={markToday}
        maxDate={maxDate}
        minDate={minDate}
        onDateSelect={this.handleDateSelect}
        onMonthChange={onMonthChange}
        showWeekendSeparator={showWeekendSeparator}
        weekStartsOn={weekStartsOn}
      />
    );

    return (
      <BpkBreakpoint query={BREAKPOINTS.MOBILE}>
        {isMobile => (
          isMobile
            ? (
              <BpkModal
                id={`${id}-modal`}
                target={inputComponent}
                onClose={this.onClose}
                isOpen={this.state.isOpen}
                title={title}
                closeLabel={closeButtonText}
                getApplicationElement={getApplicationElement}
              >
                {calendarComponent}
              </BpkModal>
            )
            : (
              <BpkPopover
                id={`${id}-popover`}
                target={inputComponent}
                onClose={this.onClose}
                isOpen={this.state.isOpen}
                label={title}
                closeButtonText={closeButtonText}
                tabIndex={0}
                {...rest}
              >
                {calendarComponent}
              </BpkPopover>
            )
        )}
      </BpkBreakpoint>
    );
  }
}

BpkDatepicker.propTypes = {
  // Required
  changeMonthLabel: PropTypes.string.isRequired,
  closeButtonText: PropTypes.string.isRequired,
  daysOfWeek: CustomPropTypes.DaysOfWeek.isRequired,
  formatDate: PropTypes.func.isRequired,
  formatDateFull: PropTypes.func.isRequired,
  formatMonth: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  getApplicationElement: PropTypes.func.isRequired,
  // Optional
  date: PropTypes.instanceOf(Date),
  dateModifiers: CustomPropTypes.DateModifiers,
  inputProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  markOutsideDays: PropTypes.bool,
  markToday: PropTypes.bool,
  maxDate: PropTypes.instanceOf(Date),
  minDate: PropTypes.instanceOf(Date),
  onDateSelect: PropTypes.func,
  onMonthChange: PropTypes.func,
  showWeekendSeparator: PropTypes.bool,
  weekStartsOn: PropTypes.number,
};

BpkDatepicker.defaultProps = {
  date: null,
  dateModifiers: BpkCalendar.defaultProps.dateModifiers,
  inputProps: {},
  markOutsideDays: BpkCalendar.defaultProps.markOutsideDays,
  markToday: BpkCalendar.defaultProps.markToday,
  maxDate: BpkCalendar.defaultProps.maxDate,
  minDate: BpkCalendar.defaultProps.minDate,
  onDateSelect: null,
  onMonthChange: null,
  showWeekendSeparator: BpkCalendar.defaultProps.showWeekendSeparator,
  weekStartsOn: BpkCalendar.defaultProps.weekStartsOn,
};

export default BpkDatepicker;
