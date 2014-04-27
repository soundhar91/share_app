chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { schemes: ['https', 'http'] },
          })
        ],
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});
chrome.pageAction.onClicked.addListener(function(tab) {
  var base = "http://www.facebook.com/sharer.php?u=";
  base =base + tab.url;
  chrome.tabs.create({url : base});
});
