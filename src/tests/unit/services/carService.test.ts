import { expect } from 'chai';
import sinon from 'sinon';
import { CarWithVehicleSchema } from '../../../interfaces/ICar';
import CarModel from '../../../models/CarModel';
import CarService from '../../../services/CarService';
import { carMock, carMockWithId } from '../mocks/carMocks';

describe('Car Service', () => {
  const carModel = new CarModel()
	const carService = new CarService(carModel, CarWithVehicleSchema)

  before(() => {
		sinon.stub(carModel, 'create').resolves(carMockWithId);
		sinon.stub(carModel, 'read').resolves([carMockWithId]);
		sinon.stub(carModel, 'readOne').resolves(carMockWithId);
		sinon.stub(carModel, 'update').resolves(carMockWithId);
		sinon.stub(carModel, 'delete').resolves(carMockWithId);
	});

	after(() => {
		sinon.restore();
	})

	describe('Create a Car', () => {
		it('Checks if it successfully creates a car', async () => {
			const result = await carService.create(carMock)
			expect(result).to.be.eq(carMockWithId)
		})
	})

	describe('Read all cars', () => {
		it('Check if it responds with array of cars', async () => {
			const result = await carService.read()
			expect(result).to.be.deep.equal([carMockWithId])
		})
	})

	describe('Read a car by id', () => {
		it('Check if it responds with a car when find by id', async () => {
			const result = await carService.readOne(carMockWithId._id)
			expect(result).to.be.eq(carMockWithId)
		})
	})

	describe('Update a car by id', () => {
		it('Check if it update and responds with a car', async () => {
			const result = await carService.update(carMockWithId._id, carMock)
			expect(result).to.be.eq(carMockWithId)
		})
	})

	describe('Delete a car by id', () => {
		it('Check if delete a car by id', async () => {
			const result = await carService.delete(carMockWithId._id)
			expect(result).to.be.eq(carMockWithId)
		})
	})
})