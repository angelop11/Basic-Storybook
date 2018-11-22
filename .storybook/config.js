import { configure } from '@storybook/react';


function loadStories() {
  require('../stories/index.js');
  require('../stories/Board.js');
  require('../stories/Card.js');
  require('../stories/Footer.js');
  require('../stories/BodyNotifications');
  require('../stories/BodyProfile');
  require('../stories/Sidebar.js');
  require('../stories/Toolbar');
}

configure(loadStories, module);