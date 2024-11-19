import { Body, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { deviceDto } from './dto/device.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DeviceService {
    constructor(private prisma: PrismaService){}

    async createDevice(@Body() dto: deviceDto){
        const {name, powerRating} = dto
        const newDevice = await this.prisma.device.create({data: {name, powerRating}})
        return newDevice
    }

    async getAllDevices(){
        const allDevice = await this.prisma.device.findMany({})
        return allDevice
    }

    async deleteDevice(id){
        const deleteDevice = await this.prisma.device.delete({where: {
            id
        }})
        return deleteDevice
    }
}
