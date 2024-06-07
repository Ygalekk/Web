const events = [
    { date: new Date('2023-05-15'), name: 'Event 1' },
    { date: new Date('2022-12-01'), name: 'Event 2' },
    { date: new Date('2023-03-20'), name: 'Event 3' },
    { date: new Date('2023-01-01'), name: 'Event 4' }
];

events.sort((a, b) => a.date.getTime() - b.date.getTime());

console.log(events);