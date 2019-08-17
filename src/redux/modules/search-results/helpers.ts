export const SET_PHOTO_RESULTS = 'SET_PHOTO_RESULTS';
export const SEARCH_PARAMETERS = 'SEARCH_PARAMETERS';
export const SEARCH_MORE_IMAGES = 'SEARCH_MORE_IMAGES';
export const EMPTY_PHOTO_RESULTS = 'EMPTY_PHOTO_RESULTS';
export const SHOW_LOADER = 'SHOW_LOADER';

export const processPhotoResults = (oldObject, newAction): Record<string, string | {}> => {
  return Object.assign({}, oldObject, {
    results: [...oldObject.results, ...newAction.results],
    totalPages: newAction.pages,
    page: newAction.page + 1,
    loading: false,
  })
};
