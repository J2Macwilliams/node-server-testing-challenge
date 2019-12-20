
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pickles').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('pickles').insert([
        {name: 'Dill', description: 'Cucumbers pickled with Vinegar and Dill'},
        {name: 'Peppers', description: 'Pickled with Salt Brine and Jalapenos'},
        {name: 'Carrots', description: 'Pickled with Garlic and Aromatics'}
      ]);
    });
};
