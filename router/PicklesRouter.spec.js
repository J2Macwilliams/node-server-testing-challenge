const request = require('supertest');

const server = require('../api/server');

const db = require('../data/dbConfig');

describe('PickleRouter.js', function() {
	// environment test---------------------------------------
	describe('environment', function() {
		it('should set environment to testing', function() {
			expect(process.env.DB_ENV).toBe('testing');
		});
	});

	//POST test for JSON -------------------------------------
	describe('POST /', function() {
		beforeEach(async function() {
			await db('pickles').truncate();
		});
		describe('add pickle', function() {
			it('should return a 201 ok', function() {
				return request(server)
					.post('/api/')
					.send({ name: 'Green Beans', description: 'with chile flakes' })
					.then(res => {
						expect(res.status).toBe(201);
					});
			});
		});
		describe('add pickle', function() {
			it('should return a json', function() {
				return request(server)
					.post('/api/')
					.send({ name: 'cauliflower' })
					.then(res => {
						expect(res.type).toMatch(/json/i);
					});
			});
		});
	});

	describe('DELETE /:id', function() {
		beforeEach(async function() {
			await db('pickles').truncate();
		});

		it('should return a 200 ok', async function() {
			const id = 1;

			return request(server)
				.delete(`/api/${id}`)
				.expect(200);
		});
		it('should return a json', async function() {
			const id = 2;

			return request(server)
				.delete(`/api/${id}`)
				.then(res => {
					expect(res.type).toMatch(/json/i);
				});
		});
	});
});
