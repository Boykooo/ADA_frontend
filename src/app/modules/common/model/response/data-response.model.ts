import { BaseResponse } from './base-response.model';

export class DataResponse<T> extends BaseResponse {
  response: T;
}
