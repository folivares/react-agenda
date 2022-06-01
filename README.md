# f-react-agenda

**f-react-agenda** is a simple agenda component for React.

[Documentation and examples](https://folivares.github.io/react-agenda)

### Setup

Install package:

```
npm install f-react-agenda
```

Import component:

```js
import { Agenda } from 'f-react-agenda';
```

Use React-Agenda:

```js
<Agenda
    startTime={600}
    endTime={900}
    firstDay={1}
    daysNumber={7}
    locale="en-US"
/>
```

### Features overview

- _Multiple views_: day, week or custom range of days.
- _Timeslot_: from one minute to sixty.
- _Events_: shows events in the agenda based on a day and a time range.
- _Resources_: enables separate lanes in the agenda (e.g.: rooms, collaborators, etc..)
- _Actions callback_: click on timeslot, event or change date event.
- _Locale_: dates format based on locale.
- _Timezone_: converts date and time in selected timezone.

### Possible future steps

- _Overlap events_: manage events with the same day and time that overlaps.
- _Multi-days event_: manage events that fits multiple days.
- _Drag&Drop_: move event card from one timeslot or day to another. Adjust time length.
- _Color for resource_: Display different color of the card, header or day column based on the resource.
- _..._: ...
- _..._: ...

