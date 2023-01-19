const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'some'];

function sortStudentsByGroups(arr) {
   //console.log(arr.sort());
    arr = arr.sort();
    let group = [];
    for (let i = 0; i < students.length; i+=3) {
        // console.log (arr[10]);
        // return;
        if (arr[i+1] === undefined) {console.log(`Оставшиеся студенты: ${arr[i]}`);return;}
        if (arr[i+2] === undefined) {console.log(`Оставшиеся студенты: ${arr[i]}, ${arr[i+1]} `);return;}
        
            group[0] = arr[i];
            group[1] = arr[i+1];
            group[2] = arr[i+2];
        return(group);
        //return
    }
    console.log(`Оставшиеся студенты: -`);
}
sortStudentsByGroups(students);

