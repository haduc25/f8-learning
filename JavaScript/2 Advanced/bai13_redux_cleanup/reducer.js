const init = {
    cars: [
        'Porsche 911',
        'Audi',
        'Mercedes'
    ]
}

export default function reducer(state = init, action, args){
    switch(action){
        case 'ADD':
            console.log(action, args)

            const [newCar] = args
            return {
                ...state,
                cars: [...state.cars, newCar]
            }

            break;
        default:
            return state;
    }
}