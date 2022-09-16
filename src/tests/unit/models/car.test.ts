import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import CarModel from '../../../models/CarModel';
import { carMock, carMockWithId } from '../mocks/carMocks';

describe('Car Model', () => {
  const carModel = new CarModel()

  before(() => {
		sinon.stub(Model, 'create').resolves(carMockWithId);
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



})