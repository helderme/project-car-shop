import { expect } from 'chai';
import { Request, Response } from 'express';
import sinon from 'sinon';
import CarController from '../../../controllers/CarController';
import CarModel from '../../../models/CarModel';
import CarService from '../../../services/CarService';
import { carMock, carMockWithId } from '../mocks/carMocks';

describe('Car Controller', () => {
  const carModel = new CarModel()
	const carService = new CarService(carModel)
	const carController = new CarController(carService)
	
	const req= {} as Request;
	const res= {} as Response;

  before(() => {
		sinon.stub(carService, 'create').resolves(carMockWithId);
		sinon.stub(carService, 'read').resolves([carMockWithId]);
		sinon.stub(carService, 'readOne').resolves(carMockWithId);
		sinon.stub(carService, 'update').resolves(carMockWithId);
		sinon.stub(carService, 'delete').resolves(carMockWithId);

		res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
	});

	after(() => {
		sinon.restore();
	})

	describe('Create a Car', () => {
		it('Checks if it successfully creates a car', async () => {
			req.body = carMock;
			await carController.create(req, res)

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMockWithId)).to.be.true;
		})
	})

	describe('Read all cars', () => {
		it('Check if it responds with array of cars', async () => {
			await carController.read(req, res)

			expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith([carMockWithId])).to.be.true;
		})
	})

	describe('Read a car by id', () => {
		it('Check if it responds with a car when find by id', async () => {
			req.params = { id: carMockWithId._id };
			await carController.readOne(req, res)

			expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMockWithId)).to.be.true;
		})
	})

 	describe('Update a car by id', () => {
		it('Check if it update and responds with a car', async () => {
			req.body = carMock;
			req.params = { id: carMockWithId._id };
			await carController.update(req, res)

			expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMockWithId)).to.be.true;
		})
	})

	describe('Delete a car by id', () => {
		it('Check if delete a car by id', async () => {
			req.params = { id: carMockWithId._id };
			await carController.delete(req, res)

			expect((res.status as sinon.SinonStub).calledWith(204)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMockWithId)).to.be.true;
		})
	})
})