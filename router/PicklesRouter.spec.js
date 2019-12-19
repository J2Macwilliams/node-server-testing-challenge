const request = require('supertest');

const server = require('./server.js');


describe('PickleRouter.js', function() {
	// environment test---------------------------------------
	describe('environment', function() {
		it('should set environment to testing', function() {
			expect(process.env.DB_ENV).toBe('testing');
		});
	});
	//POST test for JSON -------------------------------------
	describe('POST /', function() {
		it('should return a JSON', function() {
			return request(server)
				.post('/')
				.then(res => {
					expect(res.type).toMatch(/json/i);
				});
		});
		// POST test for status code and OBJECT----------------------
		it('should return status code and posted Object', function() {
			return request(server)
				.post('/')
				.send('name = spicy pickle')
				.expect(function(res) {
					res.body.id = 'some fixed id';
					res.body.name = res.body.name.toLowerCase();
				})
				.expect(
					201,
					{
						id: 'some fixed id',
						name: 'spicy pickle'
					},
					done
				);
		});
		describe('DELETE /:id', function() {
			it('should return with an object by id', function() {
				const id = req.params.id;
				return request(server)
					.delete(`/${id}`)
					.getBy(id)
					.then(res => {
						expect(id).toBe(res.id);
					});
			});
			it('should return with a JSON', function() {
				const id = req.params.id;
				return request(server)
					.delete(`/${id}`)
					.then(res => {
						expect(res.type).toMatch(/json/i);
					});
			});
		});
	});
});
