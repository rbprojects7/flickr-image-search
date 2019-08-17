import React from 'react';
import { Grommet, Grid, Box } from 'grommet';
import myTheme from '../App/myTheme';
import ConnectedSearchInput from "../../components/ConnectedSearchInput";
import ConnectedSearchResultsList from "../../components/ConnectedSearchResultsList";

const Home = () => (
  <Grommet theme={myTheme} full>
    <Grid
      fill
      rows={["auto", "flex"]}
      columns={["auto", "flex"]}
      areas={[
        { name: 'header', start: [0, 0], end: [1, 0] },
        { name: 'main', start: [0, 1], end: [1, 1] },
      ]}
    >
      <Box gridArea="header" align={"center"} justify={"center"} style={{ padding: 18, background: '#002b49', position: 'fixed', width: '100%', zIndex: 99 }}>
        <ConnectedSearchInput placeholder="Search Flickr images here" />
      </Box>
      <Box gridArea="main" background={"page-background"} style={{ padding: '100px 18px 18px' }}>
        <ConnectedSearchResultsList />
      </Box>
    </Grid>
  </Grommet>
);

export default Home;
