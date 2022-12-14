export default class ChatContainer {
  constructor() {
    this.container = document.createElement('div');
    this.container.id = "ciapiSkin";
    this.eventHandler = {
      onEndChat: function () {
        console.log('Clicked')
      }
    }
  }

  _registerEventListener(selector, handler) {
    const element = document.querySelector(selector);
    if (element) {
      element.addEventListener("click", handler);
    }
  }

  _registerEventListeners() {
    debugger;
      this._registerEventListener("#endChatPopup", (e) => {
          this.eventHandler.onEndChat(e);
          e.preventDefault();
      });
  }
}
