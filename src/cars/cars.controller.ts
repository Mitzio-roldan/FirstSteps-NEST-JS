import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, ParseUUIDPipe, UsePipes, ValidationPipe } from '@nestjs/common';
import { version } from 'os';
import { CarsService } from './cars.service';
import { CreateCarDto } from './interface/dto/create-car.dto';
import { UpdateCarDto } from './interface/dto/update-car.dto';




@Controller('cars')
// @UsePipes(ValidationPipe)
export class CarsController {
    
    constructor(
        private readonly carsService: CarsService
    ){}

    @Get()
    gerAllCars() {
        return this.carsService.findAll()
    }

    @Get(':id')
    getCar(@Param('id', ParseUUIDPipe) id: string) {
        
        return this.carsService.findById(id)
    }

    @Post()
    // @UsePipes(ValidationPipe)
    createCar(@Body() CreateCarDto:CreateCarDto){
        return this.carsService.createCar(CreateCarDto)
    }

    @Patch(':id')
    UpdateCar(
        @Param("id", ParseUUIDPipe) id: string,
        @Body() UpdateCarDto:UpdateCarDto){
        return this.carsService.updateCar(id, UpdateCarDto)
    }

    @Delete(':id')
    DeleteCar(
        @Param('id', new ParseUUIDPipe({version: '4'})) id: string){
        return this.carsService.deleteCar(id)
    }
}
