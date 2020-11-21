import {mockService} from '../../public/mockCall'

describe('Fetching data from mock service',() => {

	test('Testing the data from the resolved promise',() => {
		const data = {"mock": [
			{
        	"data": 
				{
        	  	"name": "bulbasaur",
        	  	"height": 7,
        	  	"weight": 69,
        	  	"sprites": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        	  	"abilities": [
        	  	  "chlorophyll","overgrow"
        	  		],
        	  	"type": "poison"
        		}
      		},
		]}
		expect.assertions(1)
		const res = mockService()

		expect(Promise.resolve(res)).resolves.toBe(data)
	})
});
