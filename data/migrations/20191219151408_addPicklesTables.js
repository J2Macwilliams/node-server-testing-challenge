exports.up = function(knex) {
	return knex.schema.createTable('pickles', crisp => {
		crisp.increments();

		crisp
			.string('name', 128)
			.notNullable()
			.unique();
		crisp.string('description', 255);
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('pickles');
};
