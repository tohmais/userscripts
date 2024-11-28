// ==UserScript==
// @name        ChristmasEncounter
// @namespace   https://www.github.com/tohmais
// @match       *://www.youtube.com/*
// @grant       none
// @version     0.1
// @author      tohmais
// @license     MIT
// @description On every Youtube video you click, there is a 1/10 chance to redirect you to "All I want for Christmas is You"
// ==/UserScript==


function handleRedirect(event) {
    // Roll 1d10.
    var christmasDetect = Math.floor(Math.random() * 10);
    if (christmasDetect === 0) {
        // She's coming.
        window.location.href = "https://www.youtube.com/watch?v=yXQViqx6GMY";
    }
  }
  
  const observer = new MutationObserver(() => {
      // Reattach event listener for newly loaded content (for dynamically loaded video links)
      const links = document.querySelectorAll('a[href*="watch?v="]');
      links.forEach(link => {
          link.addEventListener('click', handleRedirect);
      });
  });
  
  // Observe changes to the body of the page (dynamically loading new content)
  observer.observe(document.body, { childList: true, subtree: true });