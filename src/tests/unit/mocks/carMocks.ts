import { ICar } from "../../../interfaces/ICar"

const carMock: ICar = {
    status: true,
    model: 'fusca',
    year: 1974,
    color: 'azul',
    buyValue: 50000,
    doorsQty: 2,
    seatsQty: 5,
}

const carMockWithId: ICar & { _id: string } = {
    _id: '62cf1fc6498565d94eba52cd',
    status: true,
    model: 'fusca',
    year: 1974,
    color: 'azul',
    buyValue: 50000,
    doorsQty: 2,
    seatsQty: 5,
}

export {carMock, carMockWithId}