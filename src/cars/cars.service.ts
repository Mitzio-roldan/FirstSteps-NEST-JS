import { Injectable, NotFoundException } from '@nestjs/common';
import { log } from 'console';

import { v4 as uuidv4 } from 'uuid';
import { Car_interface } from './interface/car.interface';
import { CreateCarDto } from './interface/dto/create-car.dto';
import { UpdateCarDto } from './interface/dto/update-car.dto';

@Injectable()
export class CarsService{

    private cars:Car_interface[] = [{
        id: uuidv4(),
        brand: "Toyota",
        model: "Yaris"
    },
    {
        id: uuidv4(),
        brand: "Tesla",
        model: "S"
    },
    {
        id: uuidv4(),
        brand: "Tesla",
        model: "3"
    }
]

    findAll(){
        return this.cars
    }

    findById(id:String){
        const data = this.cars.find(e => e.id == id)
        if(!data) throw new NotFoundException(`Car with id: ${id}, not found`)
        
        return data
    }

    createCar(body:CreateCarDto){
        const {model, brand} = body
        this.cars.push({
            id: uuidv4(),
            brand: brand,
            model: model
        })
        return this.cars
    }

    updateCar(id:string, body:UpdateCarDto){
        
        let carDB = this.findById(id)
        this.cars = this.cars.map(car =>{
            if(car.id == id){
                // sobrescribe el con el body los valores que ya estaban en la DB
                carDB = {...carDB, ...body, id}
                return carDB
            }
            return car
        })
        return carDB
    }

    deleteCar(id: string){
        const car = this.findById(id)
        this.cars = this.cars.filter(car =>{
            if(car.id != id){
                return car
            }
        })
        
    }



}
