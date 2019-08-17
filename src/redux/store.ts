import { createStore } from 'redux-dynamic-modules';
import { getSagaExtension } from 'redux-dynamic-modules-saga';
import { getThunkExtension } from 'redux-dynamic-modules-thunk';
import getSearchResultsModule from './modules/search-results/getSearchResultsModule';
import { withWindow } from '../utils/withWindow';

interface CreateAppStoreOptions {
    initialState?: object;
}

const getSagaExtensionWrapped = withWindow(getSagaExtension);

const Store = ({ initialState = {} }: CreateAppStoreOptions) => createStore(
  initialState,
  [],
  [getSagaExtensionWrapped({}), getThunkExtension()],
  getSearchResultsModule(),
);

export default Store;