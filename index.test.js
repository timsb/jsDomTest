import ChatContainer from './index';

describe('index.html', () => {
  it("close button test", () => {
    // const document = new JSDOM(`<!DOCTYPE html><html><head></head><body><div id="endChatPopup">Close</div></body></html>`,
    //   { contentType: 'text/html' }
    // ).window.document
    document.body.innerHTML = '<div id="endChatPopup">Close</div>';

    const endChatEl = document.querySelector("#endChatPopup");
    console.log(endChatEl);

    const chatContainer = new ChatContainer();

    jest.spyOn(chatContainer, '_registerEventListener');
    jest.spyOn(chatContainer.eventHandler, 'onEndChat');
    chatContainer._registerEventListeners();

    endChatEl.click();

    expect(chatContainer._registerEventListener).toHaveBeenCalled();
    expect(chatContainer.eventHandler.onEndChat).toHaveBeenCalled();
  });
});
