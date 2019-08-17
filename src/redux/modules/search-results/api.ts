import axios from 'axios';
import { flickrAPIKey } from '../../../../config/app';

export interface SearchAPIRequestData {
  url?: string;
  query?: string;
  page?: number;
}

export interface SearchAPIResponseData {
  data?: string;
  error?: string;
}

const Api = {
  searchFlickrImages: async(requestData: SearchAPIRequestData): Promise<SearchAPIResponseData> => {
    const response = await axios.get<SearchAPIResponseData>(requestData.url,
      {
        params: {
          method: 'flickr.photos.search',
          api_key: flickrAPIKey,
          format: 'json',
          nojsoncallback: 1,
          tags: requestData.query,
          page: requestData.page,
        }
      });
    return response.data;
  }
};

export default Api;
