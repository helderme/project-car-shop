import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import CarModel from '../../../models/CarModel';
import { carMock, carMockWithId } from '../mocks/carMocks';

describe('Car Model', () => {
  const carModel = new CarModel()

  before(() => {
		sinon.stub(Model, 'create').resolves(carMockWithId);
		sinon.stub(Model, 'find').resolves([carMockWithId]);
		sinon.stub(Model, 'findOne').resolves(carMockWithId);
		sinon.stub(Model, 'findOneAndUpdate').resolves(carMockWithId);
		sinon.stub(Model, 'findOneAndDelete').resolves(carMockWithId);
	});

	after(() => {
		sinon.restore();
	})

	describe('Create a Car', () => {
		it('Checks if it successfully creates a car', async () => {
			const result = await carModel.create(carMock)
			expect(result).to.be.eq(carMockWithId)
		})
	})

	describe('Read all cars', () => {
		it('Check if it responds with array of cars', async () => {
			const result = await carModel.read()
			expect(result).to.be.deep.equal([carMockWithId])
		})
	})

	describe('Read a car by id', () => {
		it('Check if it responds with a car when find by id', async () => {
			const result = await carModel.readOne(carMockWithId._id)
			expect(result).to.be.eq(carMockWithId)
		})
	})

	describe('Update a car by id', () => {
		it('Check if it update and responds with a car', async () => {
			const result = await carModel.update(carMockWithId._id, carMock)
			expect(result).to.be.eq(carMockWithId)
		})
	})

	describe('Delete a car by id', () => {
		it('Check if delete a car by id', async () => {
			const result = await carModel.delete(carMockWithId._id)
			expect(result).to.be.eq(carMockWithId)
		})
	})
})