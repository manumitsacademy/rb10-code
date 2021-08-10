import students from './studentsmock.js'
function genUI(){
    students.forEach(function(student,i){
        var newli = `<li>${student.firstname}</li>`;
        document.getElementById("d1").innerHTML +=newli;
    })
}
genUI();
