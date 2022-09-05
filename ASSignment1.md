to view this document in a nice way, press Ctrl + Shift + v while this document is opened in visual studio code

# ASSignment 1

Considering the following code:
```javascript
// x is a random number between 0 and 2
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
```

1. Print the content to the console using node and the web version (with html)
2. Remove the second (with index 1) element (using push and pop or unshift and shift)
3. If the object at index `x` has a penis, print `Its a boy`. If not, print `Asparagus`. To test this, you can assign x another value before the check
4. Add another key (pick whatever you want) to the objects adjaced to the one at index `x` (note that if `x` is the first of the last index, there is only one adjaced object) and delete `has_penis` from the object at index `x` (cut his penis)
5. Append a string to the name of the object at index `x`

Bonus:
Delete the `x`th letter from the name of the object at index `x`.
Note: You cannot delete parts of a string, you need to recreate the string without the part that you want to delete.
Hint: To get a substring of a string `s`, use `s.substring(start_index, end_index)`. For example:
``` javascript
let substring = "a big black ... string".substring(2, 6);
console.log(substring);
```
will print
```
big
```

Knowing `substring` and string concatenation (using +) you can do the bonus, I believe in you.


# Verry important note!!!
If you do not know how to solve a problem, try to isolate it. For example, if i want to solve the 3rd problem, but i'm not sure how to use the index x, i can create another object as the ones inside the array and solve the problem for that one. Ex:
```javascript
let obj = {
    name: "Nume3",
    age: 69 - 54,
    has_penis: false
};

// solve the problem for object, and then generalize for objects_array[x]
```

This is the most important thing that i want you to learn as it applies to any technology and any language

# Creating a Pull Request (PR)

To create a pull request you need to do the following:

1. Create a new branch using
```bash
git checkout -b my_new_branch
```
2. Solve one or more problems
3. Add the updated and/or new files to git using
```bash
git add my_file
```
for every file or
```bash
git add *
```
to add them all at once


4. commit the changes using
```bash
git commit -m "my commit message"
```
or, if you want to be an alfa programmer
```bash
git commit
```
and use vim while emanating manliness

5. push the commited modifications to github using
```bash
git push origin my_new_branch
```

6. create a pull request by going to your repository -> Pull requests -> New pull request and set the base as master and compare as your branch

You can go back to step 2 anytime if you want to solve more exercises. Only that step 6 needs to be done only once.

HF :)