import {
  msResultsBoxElem,
  resultsBoxSideBar,
  hideMSresultsBox,
  createMSresultsBox,
  setUpMSresultsBoxIcon
} from '../markSearchResultsBox'
import { $ } from '../../utils'

let msResultsBoxOldHeight

/*****
* We also call setMSresultsBoxHeightForGoogle() in the mutation observer handler in googleSearch_ContentScript
* (for instant search) after new search engine results have been inserted as that could change the height of the page.
*/
function setMSresultsBoxHeightForGoogle(searchElement){
  /*****
  * On DOMContentLoaded (for instant search) the searchElement is not yet there so fall back to a height of
  * calc(100vh - 166px - 84px - 20px).
  *
  * If the search engine has no results, the no results message isn't put in to the #search
  * element, it is put in to another element, which means the #search element has a height of 0, so when it is 0,
  * also fall back to calc(100vh - 166px - 84px - 20px).
  *
  * So there are two conditions here:
  *   1 - the searchElement is not yet available (searchElement is null/undefined).
  *   2 - the searchElement has a .clientHeight of 0.
  *
  * Note: the calc height is a bit of a guess, but should be ok for most occasions. It is
  * 100vh minus the bottom (aka .getBoundingClientRect().bottom) of the '#appbar' element (which is 166) minus
  * the '#fbar' .offsetHeight (which is about 84) minus a little bit of padding (20px) for the bottom.
  * The calc seems to work ok with the page zoomed in too.
  *
  * Re-setting the MS results box height on each new instant search may seem a little inefficient, but we are doing
  * it for simplicity, otherwise we would need to insert the MS results box in to one of the #search elements parents
  * and make sure to insert it after the first search engine results had been inserted into the page (for instant search)
  * on page load. Also, a lot of the page dom is removed and recreated/inserted when the user clicks the back/forward
  * browser buttons (with instant search), so we would have to keep recreating/re-inserting the MS results box.
  */
  let msResultsBoxNewHeight = 'calc(100vh - 166px - 84px - 20px)'

  if(searchElement){
    const searchElementClientHeight = searchElement.clientHeight
    if(searchElementClientHeight !== 0){
      msResultsBoxNewHeight = `${ searchElementClientHeight }px`
    }
  }
  /*****
  * If the old height value is the same as the new height value, just leave it.
  */
  if(msResultsBoxOldHeight !== msResultsBoxNewHeight){
    msResultsBoxOldHeight = msResultsBoxNewHeight
    msResultsBoxElem.style.height = msResultsBoxNewHeight
  }
}

function setUpMSresultsBoxForGoogle(onSearchPage){

  createMSresultsBox()
  setMSresultsBoxHeightForGoogle($('#search'))
  /*****
  * Setting the MS results box top value as a constant seems to work ok even if the page is zoomed in.
  * So have set it to top: 169px in the css.
  * Note: if you need to bring this back and use it, make sure to also call if from the
  * instantSeachMutationObserverHandler as seen here: http://bit.ly/2hTGxPz
  */
  // setMSResultsBoxTopStyle()
  /*****
  * If the search page is displayed and we're on instant search, hide the MS results
  * box for the moment.
  */
  if(onSearchPage){
    hideMSresultsBox()
  }
  /*
  * Gonna do computedMsSidebarIconTop as a constant rather than computed as it wont change and
  * still seems to work ok even if the page is zoomed in.
  */
  // const computedMsSidebarIconTop = msSidebarIcon.getBoundingClientRect().top + scrollY
  const computedMsSidebarIconTop = 167

  setUpMSresultsBoxIcon(computedMsSidebarIconTop)

  resultsBoxSideBar.addEventListener('click', () => {
    //will need to be http://caniuse.com/#search=animation
  })
  /*****
  * The msResultsBox_google class is for google specific styles for the MS results box.
  */
  msResultsBoxElem.classList.add('msResultsBox_google')

  document.body.appendChild(msResultsBoxElem)
}

export {
  setUpMSresultsBoxForGoogle,
  setMSresultsBoxHeightForGoogle
}
