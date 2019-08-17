import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import SearchResultsList, { SearchResultsProps } from './SearchResultsList';
import {searchImagesFromFlickr} from "../../redux/modules/search-results/actions";

const mapStateToProps = ({ flickrSearch }): Pick<SearchResultsProps, 'photos' | 'loading' | 'page' | 'pages' | 'parameter'> => {
  return {
    parameter: flickrSearch.query,
    photos: flickrSearch.results,
    loading: flickrSearch.loading,
    page: flickrSearch.page,
    pages: flickrSearch.totalPages,
  };
};

type DispatchToPropsMap = Pick<SearchResultsProps, 'loadMoreRows'>;

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsMap => ({
  loadMoreRows: (): void => {
    dispatch(searchImagesFromFlickr(null));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchResultsList);