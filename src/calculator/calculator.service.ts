import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { calculateWattageDto } from './dto/calculate.dto';

@Injectable()
export class CalculatorService {
    constructor(private prismaService: PrismaService){}

    async calculateWattage(arr: calculateWattageDto[]){
        let totalWattage = 0
        for(const data of arr){

            const id = data.deviceId
            const appliance = await this.prismaService.device.findUnique({where: {id}})

            let kwUSage = data.hoursPerDay * appliance.powerRating
            totalWattage += kwUSage
        }
        totalWattage *= 1.35
        const totalUsage = {
            "weekly": totalWattage * 7,
            "monthly": totalWattage * 30,
            "yearly": totalWattage * 365,
        }
        return totalUsage
    }
}
