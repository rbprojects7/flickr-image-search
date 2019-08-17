import { all, call, put, select, takeLatest, PutEffect, CallEffect, SelectEffect } from 'redux-saga/effects';
import {
  setSearchResults,
  SetSearchResultsAction,
  EmptySearchResultsAction,
  emptySearchResults,
  FlickrAPIActions,
  setShowLoader,
  SetShowLoaderAction,
} from './actions';
import { SEARCH_MORE_IMAGES } from './helpers';
import Api, { SearchAPIRequestData } from './api';
import { SearchResultsModuleState } from './getSearchResultsModule';

const getFetchSearchParams = ({ flickrSearch }: SearchResultsModuleState): SearchAPIRequestData => ({
  query: flickrSearch.query,
  page: flickrSearch.page,
});

const fetchSearchResults = function*({ url, page }: SearchAPIRequestData): IterableIterator<CallEffect | SelectEffect | PutEffect<FlickrAPIActions>> {
  try {
    let resultsPage = page;
    yield put<SetShowLoaderAction>(setShowLoader());
    if (!page) {
      const storeData = yield select(getFetchSearchParams);
      resultsPage = storeData.page;
    } else if (page === 1) yield put<EmptySearchResultsAction>(emptySearchResults());
    const { query } = yield select(getFetchSearchParams);
    if (query && query !== '') {
      const { photos } = yield call(Api.searchFlickrImages, { url, query, page: resultsPage });
      yield put<SetSearchResultsAction>(setSearchResults(photos.photo, photos.page, photos.pages));
    }
  } catch (error) {
    console.error(error);
  }
};

const watchSearchResults = function*() {
  // @ts-ignore
  yield takeLatest(SEARCH_MORE_IMAGES, fetchSearchResults);
};

export default function* searchResultsSaga() {
  yield all([watchSearchResults()]);
}
