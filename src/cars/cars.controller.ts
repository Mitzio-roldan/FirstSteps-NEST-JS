import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
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
}
