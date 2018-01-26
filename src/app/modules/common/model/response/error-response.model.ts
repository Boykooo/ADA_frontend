import { BaseResponse } from './base-response.model';
import { ErrorInfo } from './error-info.model';

export class ErrorResponse extends BaseResponse {
  errorInfo: ErrorInfo;
}
