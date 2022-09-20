import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from './pipes/validation.pipe';

const start = async () => {
  try {
    const app = await NestFactory.create(AppModule);
    const configService = app.get(ConfigService);
    const PORT = configService.get<string>('PORT');
    app.enableCors();
    app.useGlobalPipes(new ValidationPipe());
    await app.listen(PORT, () =>
      console.log(`🚀 Server started on PORT ${PORT}`),
    );
  } catch (e) {
    console.log(e);
  }
};
start();
