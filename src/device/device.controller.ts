import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { DeviceService } from './device.service';
import { deviceDto } from './dto/device.dto';

@Controller('device')
export class DeviceController {
    constructor(private service: DeviceService){}

    @Post()
    newDevive(@Body() dto:deviceDto){
        return this.service.createDevice(dto)
    }

    @Get()
    getDevices(){
       return this.service.getAllDevices()
    }

    @Delete(':id')
    deleteDevices(@Param('id') id){
        return this.service.deleteDevice(id)
    }
}
