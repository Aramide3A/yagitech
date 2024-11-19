import { Module } from '@nestjs/common';
import { DeviceModule } from './device/device.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './product/product.module';
import { CalculatorModule } from './calculator/calculator.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';

@Module({
  imports: [DeviceModule, PrismaModule, ConfigModule.forRoot({isGlobal:true}), ProductModule, CalculatorModule, CloudinaryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
