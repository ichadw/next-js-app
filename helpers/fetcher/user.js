import fetcher from './index';
import qs from 'qs';
import { API_HOSTNAME } from './constants';

export const fetchUsers = async ({ params }) => {
    const resourceURL = new URL(`${API_HOSTNAME}/users?`);
    resourceURL.search = new URLSearchParams(qs.stringify(params));
  
    const requestOptions = {
      method: 'GET',
    };
  
    return await fetcher(resourceURL, requestOptions);
}