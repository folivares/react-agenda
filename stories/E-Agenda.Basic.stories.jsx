import React from 'react';

import './assets/css/style.css';

import { Agenda } from '../src';

import { todayEvents, tomorrowEvents, fourDaysFromNowEvents } from './examples/events.js';

export default {
  title: 'Examples/Agenda/Basic',
  component: Agenda,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <div className='agenda-container'><Agenda {...args} /></div>;

export const Basic = Template.bind({});
Basic.args = {
};

export const BasicTimeRange = Template.bind({});
BasicTimeRange.args = {
  startTime: 480,
  endTime: 900
};

export const BasicSingleDay = Template.bind({});
BasicSingleDay.args = {
  firstDay: -1,
  daysNumber: 1,
  showPeriodSelector: false
};

export const BasicDaysRangeFixed = Template.bind({});
BasicDaysRangeFixed.args = {
  firstDay: 3,
  daysNumber: 4,
  showPeriodSelector: false
};

export const BasicDaysRangeDynamic = Template.bind({});
BasicDaysRangeDynamic.args = {
  firstDay: -1,
  daysNumber: 4,
  showPeriodSelector: false
};

export const BasicOnlyFriday = Template.bind({});
BasicOnlyFriday.args = {
  firstDay: 5,
  daysNumber: 1,
  showPeriodSelector: false
};

export const BasicWithEvents = Template.bind({});
BasicWithEvents.args = {
  startTime: 480,
  endTime: 900,
  events: [...todayEvents, ...tomorrowEvents, ...fourDaysFromNowEvents]
};

export const BasicCustomTimeslot = Template.bind({});
BasicCustomTimeslot.args = {
  timeslot: 30
};

export const BasicWithEventsAndActions = Template.bind({});
BasicWithEventsAndActions.args = {
  startTime: 480,
  endTime: 900,
  events: [...todayEvents, ...tomorrowEvents, ...fourDaysFromNowEvents],
  onEventClick: (eventClicked) => (alert(`event: ${eventClicked.id} - ${eventClicked.title} - ${eventClicked.subtitle}`)),
  onTimeslotClick: (timeslotClicked) => (alert(`day: ${timeslotClicked.day} - minutes: ${timeslotClicked.minutes}`)),
  onDateChanged: (dateChanged) => (alert(`date: ${dateChanged}`)),
};