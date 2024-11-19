import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsString } from "class-validator"

export class  deviceDto{
    @ApiProperty({
        description: "Device Name",
        example : "Fan"
    })
    @IsString()
    name : string

    @ApiProperty({
        description: "Device Power Rating",
        example : "100"
    })
    @IsNumber()
    powerRating : number
}