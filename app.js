
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true});

const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, "why no fruit name?"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  // name: Rasberry,
  rating: 10,
  review: "Mystery fruit"
});

// fruit.save();

const peopleSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", peopleSchema);

const Squash = new Fruit({
  name: "Squash",
  rating: 5,
  review: "Healthy"
});

Squash.save();

const person = new Person ({
  name: "Michael",
  age: 23,
  favouriteFruit: lazones
});

// person.save();

// const pear = new Fruit ({
//   name: "pear",
//   rating: 8,
//   review: "Juicy Af"
// });
//
// const blueberry = new Fruit ({
//   name: "Blueberry",
//   rating: 8,
//   review: "Great"
// });
//
// const strawberry = new Fruit ({
//   name: "Strawberry",
//   rating: 7,
//   review: "Solid"
// });
//
// // Fruit.insertMany([pear, blueberry, strawberry], function(err){
// //   if (err) {
// //     console.log(err);
// //   } else {
// //     console.log("Success");
// //   }
// // });



Fruit.find(function(err, fruits){
  if (err) {
    console.log(err);
  } else {
    fruits.forEach(function(fruit) {
      console.log(fruit.name);
    });
  }
  mongoose.connection.close();
});

// Fruit.updateOne({_id: "612a7cf119216e30827043ac"}, {name: "Rasberry"}, function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("successfully updated fruit");
//   }
// });

// Fruit.deleteOne({_id: "612a7cf119216e30827043ac"}, function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("successfully deleted fruit");
//   }
// });

// Person.deleteMany({name: "John"}, function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("successfully deleted person");
//   }
// });

Person.updateOne({name: "John"}, {favouriteFruit: Squash}, function(err){
  if (err) {
    console.log(err);
  } else {
    console.log("successfully updated person");
  }
});
