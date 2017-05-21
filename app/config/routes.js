
import {
  StaticPage1,
  StaticPage2,
  StaticPage3,
  StaticPage4,
  DragDrop2,
  StaticPage5,
  Interactivity1,
  Interactivity2,
  DragDrop1,
  Interactivity3,
  Interactivity4
  
} from '../components/Templates.jsx';

const routes = [
  { path: '/page1',
    exact: true,
    comp: StaticPage1
  },
  { path: '/page2',
    comp: StaticPage2
  },
  { path: '/page3',
    comp: StaticPage3
  },
  { path: '/page4',
    comp: StaticPage4
  },
  { path: '/page5',
    comp: DragDrop2
  }
  ,
   { path: '/page6',
    comp: StaticPage5
  },
  { path: '/page7',
    comp: Interactivity1
  },
  { path: '/page8',
    comp: Interactivity2
  },
  { path: '/page9',
    comp: DragDrop1
  },
   { path: '/page10',
    comp: Interactivity3
  },
   { path: '/page11',
    comp: Interactivity4
  }
   
];

module.exports = {
  routes
}
