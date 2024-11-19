import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class calculateWattageDto {
  @ApiProperty({
    description: 'The Id of the device',
    example: '673ad08bbbd5ede338461e55',
  })
  @IsString()
  deviceId: string

  @ApiProperty({
    description: 'The hours per day of usage for the device',
    example: 2,
  })
  @IsNumber()
  hoursPerDay: number
}
