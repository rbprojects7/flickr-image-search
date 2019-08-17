import React, { Fragment } from 'react';
import { isEmpty } from 'lodash';
import styled from 'styled-components';
import { AutoSizer, Collection, InfiniteLoader } from 'react-virtualized';
import LoadingAnimation from "./LoadingAnimation";
import { Box, Button, Paragraph } from "grommet";

export interface SearchResultsProps {
  photos: Array<{ [key: string]: string }>;
  parameter?: string;
  loading?: boolean;
  page?: number;
  pages?: number;
  loadMoreRows?: () => void;
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1210px;
  margin: 0 auto;
`;

const StyledImg = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 0.25em;
`;

const StyledDiv = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: .25em;
  color: #fff;
`;

const GUTTER_SIZE = 3;

const SearchResultsList = ({ photos, loading, loadMoreRows, page, pages, parameter }: SearchResultsProps): JSX.Element => {

  let _columnYMap = [];

  // const _getColumnCount = (cellCount) => Math.round(Math.sqrt(cellCount));

  const _cellRenderer = ({ index, isScrolling, key, style }) => {
    const item = photos[index % photos.length];
    return (
      <StyledDiv key={item.id} style={style}>
        <StyledImg
          alt={item.id}
          src={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_n.jpg`}
        />
      </StyledDiv>
    );
  };

  const _cellSizeAndPositionGetter = ({ index }) => {
    const columnCount = 4;
    // _getColumnCount(photos.length);
    const columnPosition = index % (columnCount || 1);
    const height = 300;
    const width = 300;
    const x = columnPosition * (GUTTER_SIZE + width);
    const y = _columnYMap[columnPosition] || 0;
    _columnYMap[columnPosition] = y + height + GUTTER_SIZE;
    return {
      height,
      width,
      x,
      y,
    };
  };

  return (
    <Fragment>
      <Container>
        {photos && !isEmpty(photos) &&
        <AutoSizer disableHeight>
          {({ width }) => (
            <Fragment>
              <Collection
                cellCount={photos.length}
                cellRenderer={_cellRenderer}
                cellSizeAndPositionGetter={_cellSizeAndPositionGetter}
                height={700}
                width={width}
              />
            </Fragment>
          )}
        </AutoSizer>}
        {!loading && photos && !isEmpty(photos) && (page < pages) && <Box direction={"row"} justify={"center"} align={"center"} style={{ padding: '1em' }}>
          <Button primary label="Load More" onClick={loadMoreRows} />
        </Box>}
        {loading && <Box direction={"row"} justify={"center"} align={"center"}>
          <LoadingAnimation />
        </Box>}
        {!loading && (pages === 0) && <Box direction={"row"} justify={"center"} align={"center"} style={{ padding: '1em' }}>
          <Paragraph style={{ textAlign: 'center' }}>Sorry! No results were found for the search<br /><b>{parameter}</b></Paragraph>
        </Box>}
      </Container>
    </Fragment>
  );
};

export default SearchResultsList;
