/**
 * Created by peter joseph on 7/18/2017.
 */


//outer function celebrity with parameter firstname

function celebrity(firstName){

    var nameIntro="The Celebrity name is ";

    //inner function with parameter lastname

    function lastName(lastName){

        // this inner function has access to the outer function's variables, including the parameter

        return nameIntro + firstName + " " + lastName;
    }


    return lastName;

}

//the celebrityName outer function has returned

var mjName =new celebrity('Micheal');


// The closure (lastName) is called here after the outer function has returned above​

// Yet, the closure still has access to the outer function's variables and parameter​


document.getElementById('demo').innerHTML = mjName('Jackson');

