import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setSearchParameters, searchImagesFromFlickr } from '../../redux/modules/search-results/actions';
import SearchInput, { SearchInputProps } from './SearchInput';
import {ChangeEvent} from "react";

const mapStateToProps = ({ flickrSearch }): Pick<SearchInputProps, 'value'> => {
  return {
    value: flickrSearch.query,
  };
};

type DispatchToPropsMap = Pick<SearchInputProps, 'onChange' | 'onClick'>;

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsMap => ({
  onChange: (event: ChangeEvent<HTMLInputElement>): void => {
    dispatch(setSearchParameters(event.target.value));
  },
  onClick: (): void => {
    dispatch(searchImagesFromFlickr(1));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchInput);
