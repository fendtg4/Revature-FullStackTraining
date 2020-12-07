const api = 'https://pokeapi.co/api/v2/pokemon/';

document.getElementById('pokemon_types').onclick = getData;

let types = document.getElementById('types');

async function getData() {
    //alert("test0");

    let num = document.getElementById('pokemon_id').value;

    document.getElementById('pokemon_types').innerHTML = '';

    let response = await fetch(api+num+'/');

   //alert("test1" + response.status);

   // alert("test2");

    if (response.status === 200) {
        let data = await response.json();
        populateData(data);
    }
        else {
            document.getElementById('data').innerHTML = "It got away!";
        }


    }

function populateData(data) {
    //alert("test1");
    console.log("test");
    types.innerText = data.types[0].type.name;

    if (data.types[1]) {
        types.append('/' + data.types[1].type.name);
    }
}
