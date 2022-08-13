import { Injectable } from '@nestjs/common';

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
        if(!data){
            return{
                msg: "No existe el car con ese id"
            }
        }
        
        return data
    }



}
