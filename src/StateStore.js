import alt from './Alt';
import Actions from './Actions';
import merge from 'lodash.merge';
import DarkRawTheme from 'material-ui/lib/styles/raw-themes/dark-raw-theme';

class StateStore {
  constructor() {
    this.bindActions(Actions);

    this.state = merge({},
      {
        value: 34.2,
        theme: DarkRawTheme,
        showConfig: false,
        isFullscreen: false,
        currentTab: 1,
        tabList: [
          {id: 1, name: 'New Tab', icon: 'settings'}
        ]
      },
      JSON.parse(window.localStorage.getItem('dashboardState'))
    );

    console.log('initial store', this.state);
  }

  toggleFullscreen() {
    console.log('toggleFullscreen');
    this.state.isFullscreen = !this.state.isFullscreen;
    this.saveState();
  }

  toggleConfigure() {
    console.log('toggleConfigure');
  }

  addTab() {
    console.log('addTab');
  }

  removeTab() {
    console.log('removeTab');
  }

  chooseTab() {
    console.log('chooseTab');
  }

  renameTab() {
    console.log('renameTab');
  }

  reorderTabs() {
    console.log('reorderTabs');
  }

  saveState() {
    console.log('saveState', this.state);
    window.localStorage.dashboardState = JSON.stringify(this.state);
  }
}

export default alt.createStore(StateStore, 'StateStore');
