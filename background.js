chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {

        // do your things
        // window.setTimeout(console.log('done'), 100);


        chrome.tabs.executeScript(tab.ib, {
            file: 'inject.js'
        });
    }
})