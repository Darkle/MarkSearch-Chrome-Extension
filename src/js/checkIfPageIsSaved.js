
import { isWebUri } from 'valid-url'

import { marksearchServerAddress, marksearchApiToken } from './serverAddressAndToken'

/*****
* Check if the web page is saved in MarkSearch
*/
function checkIfPageIsSaved(tabId){
  return new Promise( (resolve, reject) => {
    if(!marksearchServerAddress || !marksearchApiToken || !tabId){
      return reject()
    }
// console.log('checkIfPageIsSaved 1')
// console.log('marksearchServerAddress', marksearchServerAddress)
// console.log('marksearchApiToken', marksearchApiToken)
    chrome.tabs.get(tabId, tab => {
      if(!tab.url || !isWebUri(tab.url)){
        return reject()
      }
// console.log('checkIfPageIsSaved chrome.tabs.get')
// console.log('tab.url', tab.url)

      const fetchUrl = `${ marksearchServerAddress }/api/get/${ encodeURIComponent(tab.url) }`
      const request = new Request(fetchUrl, {
        headers: new Headers({
          'Authorization': marksearchApiToken
        })
      })

      fetch(request).then( ({ status }) => {
        resolve((status === 200))
      })
    })
  })
}

export { checkIfPageIsSaved }