import { Module, Global } from '@nestjs/common';
import { ELKLoggerService } from './elk-logger.service';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { LoggingMiddleware } from './middleware/logging.middleware';

@Global()
@Module({
  providers: [ELKLoggerService, LoggingInterceptor, LoggingMiddleware],
  exports: [ELKLoggerService, LoggingInterceptor, LoggingMiddleware],
})
export class LoggingModule {}
