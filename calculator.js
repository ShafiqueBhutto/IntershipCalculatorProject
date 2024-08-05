document.getElementById('ageForm').addEventListener('submit', function(event){
    event.preventDefault();

    //Get the valuse from the form
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;


    //Create a new date object for user's birthdate
    const birthDate = new Date(year, month-1, day);

    //Get the Current Date
    const currentDate = new Date();


    //Calculate the Age

    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDifference = currentDate.getMonth() - birthDate.getMonth();
    const dayDifference = currentDate.getDate() - birthDate.getDate();

    //Adjust age if birth date is not occured yet this year
    if(monthDifference > 0 || (monthDifference === 0 && dayDifference < 0)){
        age--;
    }

    //Display the age
    document.getElementById('result').textContent = `Your age is ${age}.`;

});