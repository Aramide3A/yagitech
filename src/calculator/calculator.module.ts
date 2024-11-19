import { Module } from '@nestjs/common';
import { CalculatorService } from './calculator.service';
import { CalculatorController } from './calculator.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [CalculatorService, PrismaService],
  controllers: [CalculatorController]
})
export class CalculatorModule {}
