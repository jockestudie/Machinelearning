import $ from 'jquery';

import eventManager from './event';
import { SearchEngine } from './search';
import { IMAGE_NA_URL } from './constants';



const searchEngine = new SearchEngine({
    authToken: '8789b6f6520e4bae930456df379a218a'});