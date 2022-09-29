import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger, LoggerService } from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class DefaultExceptionFilter implements ExceptionFilter<HttpException> {
  private readonly logger = new Logger(DefaultExceptionFilter.name);

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const responseObject = this.formatExceptionResponse(exception);

    this.logger.error(JSON.stringify({ ...responseObject }));

    response.json(responseObject);
  }

  private formatExceptionResponse(exception: HttpException) {
    const response = exception.getResponse();

    if (typeof response !== 'string') return response;
    else return { message: response };
  }
}
