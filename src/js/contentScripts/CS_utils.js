import { getSettings } from '../utils'
import { isWebUri } from 'valid-url'

const extensionSettings = {}
let marksearchServerAddress

getSettings().then( settings => {
  Object.assign(extensionSettings, settings)
})

function getSetting(settingName){
  return extensionSettings[`${ settingName }`]
}

function setMSiconClass(msSidebarIcon, msSidebarIconTop){
  const containsClass = msSidebarIcon.classList.contains('msSidebarIconFixed')
  const winScrollY = window.scrollY

  if(!containsClass && winScrollY >= msSidebarIconTop){
    msSidebarIcon.classList.add('msSidebarIconFixed')
  }
  if(containsClass && winScrollY < msSidebarIconTop){
    msSidebarIcon.classList.remove('msSidebarIconFixed')
  }
}

function getMSserverAddress(){
  if(marksearchServerAddress){
    return marksearchServerAddress
  }

  const extensionToken = getSetting('extensionToken')

  if(typeof extensionToken !== 'string'){
    return
  }

  const splitTokenToAddress = extensionToken.split(',')[0]

  if(!isWebUri(splitTokenToAddress)){
    return
  }

  marksearchServerAddress = splitTokenToAddress

  return marksearchServerAddress
}

function generateMSserverSearchUrl(msServerAddress, searchTerms){
  const encodedSearchTerms = encodeURIComponent(searchTerms.trim())
  /*****
  * Using new URL() here so always have a trailing slash.
  */
  return `${ new URL(msServerAddress) }#markSearchSearchTerms=${ encodedSearchTerms }`
}

function createMSserverSearchLink(msServerAddress, searchTerms, msSearchServerLinkContent){
  const msServerSearchAddress = generateMSserverSearchUrl(msServerAddress, searchTerms)

  const msSearchServerLink = document.createElement('a')
  msSearchServerLink.setAttribute('href', msServerSearchAddress)
  msSearchServerLink.setAttribute('target', '_blank')
  msSearchServerLink.setAttribute('rel', 'noopener noreferrer')

  if(msSearchServerLinkContent === 'MarkSearch'){
    msSearchServerLink.textContent = 'MarkSearch'
  }

  return msSearchServerLink
}

function generateMassTempResultsForDev(markSearchResults){
  let tempResults = []
  if(markSearchResults[0]){
    tempResults = Array(100)
                    .fill(markSearchResults[0])
                    .map((item, index) =>
                      Object.assign({}, item, {pageTitle: `${ item.pageTitle } ${ index + 1 }`})
                      // Object.assign(
                      //   {},
                      //   item,
                      //   {
                      //     pageTitle: `${ item.pageTitle } ${ index + 1 }`,
                      //     pageUrl: item.pageUrl.repeat(10)
                      //   }
                      // )
                    )
  }
  return tempResults
}

export {
  getSetting,
  setMSiconClass,
  generateMassTempResultsForDev,
  getMSserverAddress,
  createMSserverSearchLink,
  generateMSserverSearchUrl,
}
