// chrome.runtime.onInstalled.addListener(function() {
//     chrome.storage.sync.set({color: '#3aa757'}, function() {
//       console.log('The color is green.');
//     });
//     chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
//       chrome.declarativeContent.onPageChanged.addRules([{
//         conditions: [new chrome.declarativeContent.PageStateMatcher({
//           pageUrl: {hostEquals: 'developer.chrome.com'},
//         })
//         ],
//             actions: [new chrome.declarativeContent.ShowPageAction()]
//       }]);
//     });
//   });

// let changeColor = document.getElementById('changeColor');

//   chrome.storage.sync.get('color', function(data) {
//     changeColor.style.backgroundColor = data.color;
//     changeColor.setAttribute('value', data.color);
//   });

//   changeColor.onclick = function(element) {
//     let color = element.target.value;
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//       chrome.tabs.executeScript(
//           tabs[0].id,
//           {code: 'document.body.style.backgroundColor = "' + color + '";'});
//     });
//   };

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundColor = "#3aa757";'});
  });