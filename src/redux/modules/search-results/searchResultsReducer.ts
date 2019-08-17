import { Reducer } from 'redux';
import { SET_PHOTO_RESULTS, SEARCH_PARAMETERS, EMPTY_PHOTO_RESULTS, SHOW_LOADER, processPhotoResults } from './helpers';
import { FlickrAPIActions } from './actions';
import SearchResultsState from './searchResultsState';

const initialState: SearchResultsState = {
  query: '',
  page: 1,
  results: [],
  loading: false,
};

const searchResultsReducer: Reducer<SearchResultsState, FlickrAPIActions> = (
  state = initialState,
  action: FlickrAPIActions,
): SearchResultsState => {
  switch (action.type) {
    case SEARCH_PARAMETERS:
      return {
        ...state,
        query: action.query,
        page: action.page,
      };
    case SET_PHOTO_RESULTS:
      return processPhotoResults(state, action);
    case SHOW_LOADER:
      return {
        ...state,
        loading: true,
      };
    case EMPTY_PHOTO_RESULTS:
      return {
        ...state,
        page: 1,
        results: [],
        loading: true,
      };
    default:
      return state;
  }
};

export default searchResultsReducer;
