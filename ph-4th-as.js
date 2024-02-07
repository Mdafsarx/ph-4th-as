
/*function signature/sample */
function calculateMoney(ticketSale) {

// bonus
if(ticketSale<0){ return `${ticketSale} is invalid number`}


else if(0<=ticketSale){

        const perTicket=120;
    // expenditure
    const guardSalary=500;
    const eightStaffLunch=50 * 8;

    const answer=(perTicket * ticketSale) -(guardSalary + eightStaffLunch);
    console.log(answer)

    }
    


    // You have to write your code here
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*function signature/sample */
function checkName(name) {

if( typeof name !=="string"){ return 'invalid'}

    const Name=name.toLowerCase()

if(Name.endsWith('a')||Name.endsWith('y')||Name.endsWith('i')||Name.endsWith('e')||Name.endsWith('o')||Name.endsWith('u')||Name.endsWith('w')){
    return 'Good Name'}

    else{ return "Bad Name" }

    //write your code here
    }
    
////////////////////////

    /*function signature/sample */
function deleteInvalids(array) {

if(!Array.isArray(array))
{
    return `${array} this is not array . only array allowed.`
}
    else{
        const filterArray=[];

        for(const arr of array){

            if(typeof arr ==='number'&& !isNaN(arr) ){ 
        filterArray.push(arr);
            }
        }
        return filterArray;
    }
    // You have to write your code here
    }


    