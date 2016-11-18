(() => {
  /*****
  * Note: URLSearchParams is not available in Microsoft Edge yet, maybe use npm 'query-string'
  */
  const pageQueryParams = new URLSearchParams(window.location.search)
  let pageHash = new URLSearchParams(window.location.hash)
  /*****
  * If there is a query string (?), then it's not instant search. Can't do it the
  * other way, cause it's possible to have a hash on the end of a query string, but not vice versa (AFAIK)
  */
  const isInstantSearch = !pageQueryParams.has('q')    //if there is a query string (?), then it's not instant search
  const searchInput = document.querySelector('#lst-ib')
  /*****
  * We wanna exit early if it's not a search page.
  */
  if(!searchInput){
    return
  }

  console.log('google search content script inserted and running')
  // import '../../styles/googleSearch_ContentScript.styl'
  const debounce = require('lodash.debounce')
  const { getSettings, $, $$ } = require('../../utils')

  let searchRequestPort
  let msResultsContainer
  let firstRun = true
  let searchInputOldValue

  function createMarkSearchResultsDom(searchResults){
    console.log('createMarkSearchResultsDom', searchResults)
    /*****
    * Create the results container on first run or clear it.
    */
    if(firstRun){
      msResultsContainer = document.createElement('div')
      msResultsContainer.setAttribute('id', 'marksearchResultsContainer')
    }
    if(!firstRun){
      msResultsContainer.innerHTML = ''
    }

    // for(let i = 0, len = searchResults.length; i < len; i++){
    //   const result = searchResults[i]
    //
    // }

    /*****
    * Delaying the append to make it more efficient. We want to create all the result elems and append them
    * to the msResultsContainer before we append it to the page.
    */
    if(firstRun){
      firstRun = false
      document.body.appendChild(msResultsContainer)
    }
  }

  function searchInputChangeHandler(){
    const searchInputValue = searchInput.value.trim().toLowerCase()
    if(searchInputValue !== searchInputOldValue){
      searchInputOldValue = searchInputValue
      searchRequestPort.postMessage({searchTerms: searchInput.value})
    }
  }

  function initGoogleSearchIntegration(settings){
    if(!settings.integrateWithGoogleSearch){
      return
    }
    searchRequestPort = chrome.runtime.connect({name: 'contentScriptSearchRequest'})
    // const optionsPagePort = chrome.runtime.connect({name: 'openOptionsPage'})
    const debounceTime = 200
    searchInputOldValue = searchInput.value.toLowerCase()


    searchRequestPort.onMessage.addListener( searchResults => {
      if(!Array.isArray(searchResults) || !searchResults.length){
        return
      }
      createMarkSearchResultsDom(searchResults)
    })

    /*****
    * The searchInput.value doesn't seem to be available yet, so grab search terms
    * from window location hash/query params.
    */
    searchRequestPort.postMessage(
      {
        searchTerms: isInstantSearch ? pageHash.get('q') : pageQueryParams.get('q')
      }
    )

    const debouncedSearchInputChangeHandler = debounce(
      searchInputChangeHandler,
      debounceTime,
      {
        'leading': false,
        'trailing': true
      }
    )

    searchInput.addEventListener('input', debouncedSearchInputChangeHandler)
    searchInput.addEventListener('change', debouncedSearchInputChangeHandler)
  }

  getSettings().then(initGoogleSearchIntegration)

})()
