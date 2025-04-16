import { Tesla, Audi, Toyota, Honda, Vehicle, Hunday } from './03-liskov-b';


(() => {
    
    const printCarSeats = ( cars: Vehicle[] ) => {

        // * This is a good practice, because if we add a new car,
        cars.forEach( car => {
            console.log( car.constructor.name, car.getNumberOfSeats() )
        });
        

        // ! This is a bad practice, because if we add a new car, 
        // ! we need to modify this function.
        // for (const car of cars) {
         
        //     if( car instanceof Tesla ) {
        //         console.log( 'Tesla', car.getNumberOfSeats() )
        //         continue;
        //     }
        //     if( car instanceof Audi ) {
        //         console.log( 'Audi', car.getNumberOfSeats() )
        //         continue;
        //     }
        //     if( car instanceof Toyota ) {
        //         console.log( 'Toyota', car.getNumberOfSeats() )
        //         continue;
        //     }
        //     if( car instanceof Honda ) {
        //         console.log( 'Honda', car.getNumberOfSeats() )
        //         continue;
        //     }         

        // }

        
    }
    
    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
        new Hunday(4),
    ];


    printCarSeats( cars );

})();