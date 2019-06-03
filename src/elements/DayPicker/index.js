// @flow
import React from 'react';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import { Moment } from 'moment';

import DayPickerWrapper from './DayPickerWrapper';

type Props = {
  isOutsideRange?: (day: number) => any,
  onDateChange: (date: Moment) => any,
  onFocusChange: (focused: any) => any,
  focused: boolean,
  date: Moment,
  style?: Object,
  className?: string,
  numberOfMonths?: number,
};

const DayPicker = ({
  isOutsideRange,
  onDateChange,
  onFocusChange,
  focused,
  date,
  style,
  className,
  numberOfMonths,
}: Props) => (
  <DayPickerWrapper style={style} className={className}>
    <SingleDatePicker
      isOutsideRange={isOutsideRange}
      onDateChange={onDateChange}
      onFocusChange={onFocusChange}
      focused={focused}
      date={date}
      numberOfMonths={numberOfMonths}
    />
  </DayPickerWrapper>
);

DayPicker.defaultProps = {
  isOutsideRange: () => false,
  style: {},
  className: '',
  numberOfMonths: 1,
};

export default DayPicker;