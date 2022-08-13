import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {

    private cars = [{
        id: 1,
        brand: "Toyota",
        model: "Yaris"
    },
    {
        id: 2,
        brand: "Tesla",
        model: "S"
    },
    {
        id: 3,
        brand: "Tesla",
        model: "3"
    }
]

    findAll(){
        return this.cars
    }

    findById(id:Number){
        const data = this.cars.find(e => e.id == id)
        if(!data) throw new NotFoundException(`Car with id: ${id}, not found`)
        
        return data
    }

    createCar(body:any){
        const {model, brand} = body
        this.cars.push({
            id: this.cars[`${this.cars.length - 1}`].id + 1,
            brand: brand,
            model: model
        })
        return this.cars
    }



}
