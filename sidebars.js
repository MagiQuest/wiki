export default {
  legacySidebar: [
    {
      type: 'doc',
      id: 'legacy/magiquest', // document ID
      label: 'MagiQuest', // sidebar label
    },
    {
      type: 'category',
      label: 'Adventures',
      collapsible: true,
      collapsed: false,
      link: {type: 'doc', id: 'legacy/adventures/adventures'},
      items: [
        'legacy/adventures/dragonadventure',
      ],
    },
  ],
  chroniclesSidebar: [
    {
      type: 'doc',
      id: 'chronicles/magiquestchronicles', // document ID
      label: 'MagiQuest Chronicles', // sidebar label
    },
  ],
  evergreenSidebar: [
    {
      type: 'doc',
      id: 'evergreen/magiquestevergreen', // document ID
      label: 'MagiQuest Evergreen', // sidebar label
    },
  ],
};