import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './modules/app/app.module';
import { ValidationPipe } from '@nestjs/common';
import { DefaultExceptionFilter } from './filters/exception.filter';

const start = async () => {
  try {
    const app = await NestFactory.create(AppModule);
    const configService = app.get(ConfigService);
    const PORT = configService.get<string>('PORT');

    const config = new DocumentBuilder()
      .setTitle('CRUD')
      .setDescription('API description')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/', app, document);

    app.enableCors();
    app.useGlobalFilters(new DefaultExceptionFilter());
    app.useGlobalPipes(
      new ValidationPipe({
        enableDebugMessages: true,
        whitelist: true,
        forbidNonWhitelisted: false,
        forbidUnknownValues: false,
        transform: true,
      }),
    );
    await app.listen(PORT, () =>
      console.log(`🚀 Server started on PORT ${PORT}`),
    );
  } catch (e) {
    console.log(e);
  }
};
start();
