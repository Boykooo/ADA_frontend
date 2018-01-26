import { BaseResponse } from './base.response';
import { ErrorInfo } from './model/error-info.model';

export class ErrorResponse extends BaseResponse {
  errorInfo: ErrorInfo;
}
