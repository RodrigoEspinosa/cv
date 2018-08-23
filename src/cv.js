import fs from 'fs';

const PurepointLogo = fs.readFileSync(__dirname + '/static/purepoint.png');
const ClevertechLogo = fs.readFileSync(__dirname + '/static/clevertech.png');
const SophilabsLogo = fs.readFileSync(__dirname + '/static/sophilabs.png');

export default [
  {
    title: 'Experience',
    entries: [
      {
        id: 1,
        image: { data: PurepointLogo, format: 'png' },
        title: '— JavaScript Engineer',
        date: 'Nov 207 - Current',
        items: [
          {
            id: 1,
            title: 'Nov 2017—Current. Node.js',
            description: 'Node.js developer for Hive, voice squad. Integration between Hive Home API to control their appliances and Google Home + Amazon Echo. \n— Hive Home.'
          }
        ]
      },
      {
        id: 2,
        image: { data: ClevertechLogo, format: 'png' },
        title: '— Software Engineer',
        date: 'Jul 2015 - Nov 2017',
        items: [
          {
            id: 1,
            title: 'Sep 2016—Nov 2017. Node.js + React',
            description: 'Tech lead at a React application with a an API built with Node.js. \n— InsureStreet, now Canopy.'
          },
          {
            id: 2,
            title: 'Jul 2015—Sep 2016. Node.js',
            description: 'Node.js application with enterprise-grade security. \n— Conduco, Vision Media Manangement.'
          }
        ]
      },
      {
        id: 3,
        image: { data: SophilabsLogo, format: 'png' },
        title: '— Software Engineer',
        date: 'Feb 2014 - Jul 2015',
        items: [
          {
            id: 1,
            title: '2014—2015. Django + Ember',
            description: '— Lead developer at Fulcrum.'
          },
          {
            id: 2,
            title: '2015. Django',
            description: '— Developer at CareerVillage.'
          },
          {
            id: 3,
            title: '2015. Ionic',
            description: '— Developer at LocumList.'
          },
          {
            id: 4,
            title: '2015. Django',
            description: '— Developer at Clover.'
          }
        ]
      },
      {
        id: 4,
        title: 'Early days',
        date: 'Feb 2012 - Jan 2014',
        items: [
          {
            id: 1,
            title: 'Dec 2012 - Jan 2014',
            description: '— Software Engineer at CrabLabs.'
          },
          {
            id: 2,
            title: 'Feb 2012 - Oct 2012',
            description: '— PHP Developer at Kriptonita Media'
          }
        ]
      }
    ]
  }
]
