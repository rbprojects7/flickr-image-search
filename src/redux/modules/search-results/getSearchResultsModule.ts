import { ISagaModule } from 'redux-dynamic-modules-saga';
import searchResultsReducer from './searchResultsReducer';
import SearchResultsState from './searchResultsState';
import searchResultsSaga from './searchResultsSaga';

export interface SearchResultsModuleState {
  readonly flickrSearch: SearchResultsState;
}

const getSearchResultsModule = (): ISagaModule<SearchResultsModuleState> => ({
  id: 'flickrSearch',
  reducerMap: {
    flickrSearch: searchResultsReducer,
  },
  sagas: [searchResultsSaga],
});

export default getSearchResultsModule;