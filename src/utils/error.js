import axios from 'axios';
import { message } from 'antd';


export function httpErrorHandler(error) {
  if (error === null) throw new Error('Unrecoverable error!! Error is null!');
  if (axios.isAxiosError(error)) {
    const response = error?.response;
    const request = error?.request;
    const config = error?.config; //here we have access the config used to make the api call (we can make a retry using this conf)


    if (error.code === 'ERR_NETWORK') {
      message.error('Qurilmada internet yoniqligiga e\'tibor bering!', 5);
    } else if (error.code === 'ERR_CANCELED') {
      message.error('ulanish bekor qilindi..', 5);
    }
    if (response) {
      const statusCode = response?.status;
      if (statusCode === 404) {
        message.error('Ma\'lumot yuklashda xatolik');
      } else if (statusCode === 401) {
        console.log('Please login to access this resource');
      } else if (statusCode >= 500) {
        message.error('Serverda xatolik yuz berdi', 5);
      }
    } else if (request) {
      console.error(request);
    }
    return response?.status;
  }
}
