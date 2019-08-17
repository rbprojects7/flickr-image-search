import { Action } from 'redux';
import { flickrURL } from '../../../../config/app';
import {SEARCH_MORE_IMAGES, SEARCH_PARAMETERS, SET_PHOTO_RESULTS, EMPTY_PHOTO_RESULTS, SHOW_LOADER} from "./helpers";

export interface SetSearchParametersAction extends Action {
  type: typeof SEARCH_PARAMETERS;
  query?: string;
  page?: number;
}

export const setSearchParameters = (query?: string, page?: number): SetSearchParametersAction => ({
  type: SEARCH_PARAMETERS,
  query,
  page,
});

export interface SearchImagesFromFlickrAction extends Action {
  type: typeof SEARCH_MORE_IMAGES;
  url: string;
  page?: number;
}

export const searchImagesFromFlickr = (page): SearchImagesFromFlickrAction => ({
  type: SEARCH_MORE_IMAGES,
  url: flickrURL,
  page,
});


export interface SetSearchResultsAction extends Action {
  type: typeof SET_PHOTO_RESULTS;
  results?: Array<{ [key: string]: string }>;
  page?: number;
  pages?: number;
}

export const setSearchResults = (results?: Array<{ [key: string]: string }>, page?: number, pages?: number): SetSearchResultsAction => ({
  type: SET_PHOTO_RESULTS,
  results,
  page,
  pages,
});

export interface EmptySearchResultsAction extends Action {
  type: typeof EMPTY_PHOTO_RESULTS;
}

export const emptySearchResults = (): EmptySearchResultsAction => ({
  type: EMPTY_PHOTO_RESULTS,
});


export interface SetShowLoaderAction extends Action {
  type: typeof SHOW_LOADER;
}

export const setShowLoader = (): SetShowLoaderAction => ({
  type: SHOW_LOADER,
});

export type FlickrAPIActions =
  | SetSearchParametersAction
  | SearchImagesFromFlickrAction
  | SetSearchResultsAction
  | EmptySearchResultsAction
  | SetShowLoaderAction;
