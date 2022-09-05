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

// ex. 4

if (x==0) {objects_array[x+1].citizenship= "Romanian";}
            else if (x==1) {objects_array[x-1].citizenship= "Romanian";
                            objects_array[x+1].citizenship= "Romanian";}
                        else if (x==2) {objects_array[x-1].citizenship= "Romanian";}

console.log (objects_array);

delete objects_array[x].has_penis;
console.log (objects_array[x]);

// ex. 5

objects_array[x].name = objects_array[x].name + "Ceva";
console.log (objects_array);

// bonus

let a = objects_array[x].name.substring (0,x) + objects_array[x].name.substring (x+1,objects_array[x].name.length);

console.log (a);