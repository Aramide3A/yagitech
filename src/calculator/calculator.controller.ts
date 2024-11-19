import { Body, Controller, Post } from '@nestjs/common';
import { CalculatorService } from './calculator.service';
import { ApiResponse } from '@nestjs/swagger';
import { calculateWattageDto } from './dto/calculate.dto';

@Controller('calculate')
export class CalculatorController {
    constructor(private calculatorService: CalculatorService){}

    @ApiResponse({
        type: Array,
        status: 200,
        description: 'An array with the total wattage usage per week, month and year'
    })
    @Post()
    calculateWattage(@Body() arr: calculateWattageDto[]){
        return this.calculatorService.calculateWattage(arr)
    }
}
