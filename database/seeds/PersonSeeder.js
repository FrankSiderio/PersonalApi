'use strict'

const Person = use('App/Models/Person')
const Interest = use('App/Models/Interest')

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

      // Doin some interests
      var titles = ['Eagles', 'Flyers', 'Phillies', 'Sixers', 'Baseball', 'Creating Sandcastles'];
      var descriptions = ['Fly Eagles Fly', 'Hockey', 'Since I played baseball for most of my life I have always been a huge Phillies fan.', 'Yes I do trust the process and I always will.', 'I played baseball most of my life and it used to be something I was committed to more than anything.', 'Since I like to go to the beach I picked up a hobby of creating sand castles. I have even participated in competitions'];
      var imagePaths = ['../images/interests/eagles.jpg', '../images/interests/flyers.jpg', '../images/interests/phillies.jpg', '../images/interests/sixers.png', '../images/interests/baseball.jpg', '../images/interests/castle.jpg'];

      for(var i = 0; i < titles.length; i++) {
          const interest = new Interest();

          interest.title = titles[i];
          interest.description = descriptions[i];
          interest.imagePath = imagePaths[i];
          interest.person_id = 1;

          await interest.save();
      }
  }
}

module.exports = PersonSeeder
