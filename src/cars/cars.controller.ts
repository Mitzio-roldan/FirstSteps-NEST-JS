import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';




@Controller('cars')
export class CarsController {
    
    constructor(
        private readonly carsService: CarsService
    ){}

    @Get()
    gerAllCars() {
        return this.carsService.findAll()
    }

    @Get(':id')
    getCar(@Param('id',ParseIntPipe) id: number) {
        
        return this.carsService.findById(id)
    }

    @Post()
    createCar(@Body() body:any){
        return this.carsService.createCar(body)
    }

    @Patch(':id')
    UpdateCar(
        @Param("id", ParseIntPipe) id: number,
        @Body() body:any){
        return {
            method: 'Patch',
            id
        }
    }

    @Delete()
    DeleteCar(
        @Param(':id', ParseIntPipe) id: number,
        @Body() body:any){
        return {
            method: 'Delete',
            id
        }
    }
}
