import alt from './Alt';

class Actions {
  constructor() {
    this.generateActions(
      'toggleFullscreen',
      'toggleConfigure',
      'addTab',
      'removeTab',
      'chooseTab',
      'renameTab',
      'reorderTabs'
    );
  }
}

module.exports = alt.createActions(Actions);
