
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



/*function signature/sample */
function checkName(name) {

if( typeof name !=="string"){ return 'invalid'}

    const Name=name.toLowerCase()

if(Name.endsWith('a')||Name.endsWith('y')||Name.endsWith('i')||Name.endsWith('e')||Name.endsWith('o')||Name.endsWith('u')||Name.endsWith('w')){
    return 'Good Name'}

    else{ return "Bad Name" }

    //write your code here
    }
    


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


    /*function signature/sample */
function password(obj) {

    const siteName=obj.siteName;
    const birthYear=obj.birthYear;
    const name=obj.name;
    
    //write your code here
if( !obj.name || !obj.birthYear || !obj.siteName ){
return `invalid`
}
else if(birthYear.toString().length!==4){
    return`invalid`
}
 else{


    
      const charat=siteName.split('');
    const firstCharatRemove=charat.shift();
    const firstCharatCapital=firstCharatRemove.toUpperCase();
    charat.unshift(firstCharatCapital);
    const chartJoin=charat.join('');
    
    const answer=chartJoin.concat("#").concat(name).concat('@').concat(birthYear);
    return answer;   }

}

////////

/*function signature/sample */
function monthlySavings(arr , livingCost) {
    // You have to write your code here

 for(const array of arr){

  
}
}
    const output=monthlySavings([1000,2000,2500],5000)
    console.log(output);
