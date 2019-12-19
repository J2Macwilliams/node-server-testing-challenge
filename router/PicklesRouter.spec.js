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
		it('should return posted Object', function() {
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
    });
    
    
});
