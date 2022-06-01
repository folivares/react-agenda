import React from 'react';

import { Agenda } from '../src';

import { todayEvents, tomorrowEvents, fourDaysFromNowEvents } from './examples/events.js';

export default {
  title: 'Examples/Agenda/Locale and Timezone',
  component: Agenda,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <Agenda {...args} />;

export const LocaleIT = Template.bind({});
LocaleIT.args = {
  locale: "it",
  translations: { todayLabel: 'Oggi', selectViewDayLabel: 'Giorno', selectViewWeekLabel: 'Settimana'}
};

export const TimezoneArgentinaSalta = Template.bind({});
TimezoneArgentinaSalta.args = {
  locale: "en",
  timeZone: "America/Argentina/Salta"
};

export const TimezoneArgentinaSaltaWithEvents = Template.bind({});
TimezoneArgentinaSaltaWithEvents.args = {
  startTime: 160,
  endTime: 1200,
  locale: "en",
  timeZone: "America/Argentina/Salta",
  events: [...todayEvents, ...tomorrowEvents, ...fourDaysFromNowEvents]
};