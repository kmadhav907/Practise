import axios from 'axios';
import apiResponse from '../interfaces/apiresponse';

async function getApiResponse(): Promise<apiResponse> {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts'
  );
  return response.data;
}
export default getApiResponse;
