let peoples = [
  {
    "id": 1,
    "name": "Simranjot",
	"age": 22
  },
  {
    "id": 2,
    "name": "Preet Kamal",
	"age" : 25
  },
  {
    "id": 3,
    "name": "Damandeep Singh",
	"age": 17
  },
  {
    "id": 4,
    "name": "Parvinder",
	"age": 29
  }
];

exports.find = () => {
    return peoples;
};

exports.findById = (id) => {
    for (let people of peoples) {
        if (people.id === Number(id))
		{			
			return people;
		}
    }
    let e = new Error(`Not Found with Id =  ${id}.`);
    e.statusCode = 404;
    throw e;
};
