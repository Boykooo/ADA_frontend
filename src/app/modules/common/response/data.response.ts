import { BaseResponse } from './base.response';

export class DataResponse<T> extends BaseResponse {
  response: T;
}
