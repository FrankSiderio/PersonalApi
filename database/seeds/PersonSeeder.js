'use strict'

const Person = use('App/Models/Person')

/*
|--------------------------------------------------------------------------
| PersonSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')

class PersonSeeder {
  async run () {
      const person = new Person();

      person.firstName = 'Frank';
      person.lastName = 'Siderio';
      person.bio = 'I am a computer science major from the Philadelphia area and an adovacate for all Philly sports. 🦅 🔔 ⚾ 🏒';
      person.email = 'franksiderio@yahoo.com';

      await person.save();

  }
}

module.exports = PersonSeeder
