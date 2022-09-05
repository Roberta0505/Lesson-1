let x = Math.floor(Math.random() * 2);

let objects_array = [
    {
        name: "Nume1",
        age: 69,
        has_penis: false
    },
    {
        name: "Nume2",
        age: 69 + 3,
        has_penis: true
    },
    {
        name: "Nume3",
        age: 69 - 54,
        has_penis: false
    }
]

//here comes my work
// ex. 1
console.log (x);

console.log (objects_array);


// ex. 2
let a = objects_array.pop ();
objects_array.pop ();
objects_array.push (a);
console.log (objects_array);


// ex. 3
/* objects_array.push ({
                    name: "NumeY", 
                    age: 27, 
                    has_penis: true
                    }); */

if (objects_array [x].has_penis == 1) 
        {console.log ("It's a boy");}

        else {console.log ("Asparagus")};

// ex. 4