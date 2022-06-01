import './assets/css/style.css';

import React from 'react';

import { Agenda } from '../src';

import { resources, todayResourcesEvents } from './examples/resources';

export default {
  title: 'Examples/Agenda/Resources',
  component: Agenda,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <div className='agenda-container'><Agenda {...args} /></div>;

export const Resources = Template.bind({});
Resources.args = {
  firstDay: -1,
  daysNumber: 1,
  resources,
  showPeriodSelector: false
};

export const ResourcesWithEvents = Template.bind({});
ResourcesWithEvents.args = {
  startTime: 500,
  endTime: 1100,
  firstDay: -1,
  daysNumber: 1,
  resources,
  showPeriodSelector: false,
  events: todayResourcesEvents
};