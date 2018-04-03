// ...
// This is the main module (entry point) for the application. 
//
// The application is event-driven using an instance of an EventManager class, imported from the event.js module. 
// 
// Events must be triggered for actions such as when a search is started or when there are search results to display, 
// and subscribers must be added to the EventManager instance in order to be notified of these events. All events 
// used in the application are shown in the code below.
//
// As you implement the various TODO items in this and the other modules, make sure to utilize ES6 features. 
// Beyond modules and classes, use e.g.
//
// Arrow functions.
// Promises.
// Destructuring (of objects e.g.)
// Template strings.

import $ from 'jquery';

// this module's dependencies have already been imported and should provide hints on how to export them from their 
// respective modules.
import eventManager from './event';
import { SearchEngine } from './search';
import { IMAGE_NA_URL } from './constants';

// ...
// Construct an instance of SearchEngine with an Oauth token from Spotify.
//
// NOTE: Remember that a given token is only valid for 1 hour!
const searchEngine = new SearchEngine({
    authToken: '<Oauth token here...>'
});

// ...
// Adds an subscriber that starts a search in response to an 'onSearch' event.
//
// This code should provide hints on how the SearchEngine class in the search/index.js module must be implemented.
eventManager.addSubscriber(
    'onSearch', 
    searchParams => {
        searchEngine.execute(searchParams)
            .then(searchResults => eventManager.notify('onSearchResults', searchResults))
            .catch(searchError => eventManager.notify('onSearchError', { searchParams, searchError }));
    }
)

// ...
// TODO: Add a subscriber to log each 'onSearch' event and the search parameters.

// ...
// TODO: Add a subscriber to process searchResults in response to an 'onSearchResults' event.

// ...
// TODO: Add a subscriber to process a search error in response to an 'onSearchError' event (e.g., show
// and alert with an error message).

// ...

$("#search-text").keyup((event) => {
    if (event.keyCode == 13) {
        $("#search-start").trigger('click');
    }
})

$('#search-start').click(() => {
    $('.search-result').remove();
    
    const searchType = $('#search-type').val();
    const searchText = $('#search-text').val();

    // ...
    // TODO: Notify subscribers of an 'onSearch' event, passing the search parameters as event data.
}); 