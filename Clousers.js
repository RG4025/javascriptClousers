

    // 1 What is the function declaretion


    // function square(num){
    //     return num * num;
    // }


    // console.log(square(5));



        // 2 function Expression


        // const main = function (num){
        //     return num * num;

        // }

        // console.log(main(5));


        // 3 What is the first class function


        // function square(num){
        //     return num * num;
        // }


        // function displaySquare(fn){
        //     console.log("The square is : " + fn(5));
        // }

        // displaySquare(square);



        // 4 IIFE - Immediately invoked function expression

        // (function(x){
        //     return (function (y){
        //         console.log(x);     //1
        //     })(5);
        // })(1);



        // 5 what is params and arguments


        // function main(num){        //params
        //     return num *num;
        // }

        // main(5);     //arguments


        // 6 Differance between the spread and rest operator


        // function multiply(...nums){           //rest operator
        //     console.log(nums[0] * nums[1]);
        //     console.log(nums);
        // }

        // var arr = [10,20];

        // multiply(...arr);       //spread operator

            // Another example 



            // function main(a,b,c,...numbers){
            //     return console.log(a,b,c,numbers);
            // };

            // main(1,34,54,56,4,23,234,5677,4,54,);




            // 7 assigning the value to the arry in the some empty index value

                // let arr = [1,2,4,4];

                // arr[10] = 978979;

                // console.log(arr);



        // 8 Normal and arrow functoins working with the argumentgs and this keyword


        // with the normal function

        // function main(){
        //     console.log(arguments);
        // };

        // main("This the the arguments passed through the without params");
        // main(5+5);


        // with arrow function


        // const main = () => {
        //     console.log(arguments);
        // };

        // main("This is the arguments");   // it gives the error thar argument is not defined



        // Working with this keyword

        // let userName = {
        //     userName: "Rushi",
        //     fn1: () =>{
        //         console.log("The username is : " + this.userName);  // undefined

        //     },

        //     fn2(){
        //         console.log("The username is : " + this.userName);  //Rushi
        //     }
        // }

        // userName.fn1();
        // userName.fn2();



    //  9 Clousure 

    // function mainFunction(num){

    //     return function(innernum){
    //         console.log(num + innernum);  // this clousure has the access to the outer most variables inner variables and the gloable variables

    //     }
    // }

    // let add = mainFunction(5);   // first value assigning to the num
    // add(10);                     // second value assigning to the innernum



    // let a = 'Rushikesh gurav';
    // console.log(a.length); // the length property not work with the number
    
    // let main = "main";
    
    // console.log(main);
    




    // 10 creating the caching or memoize function that stores the preious results



    // function myMemoize(fun,context){

    //     let rest = {};

    //     return function(...args){
    //         let argsCache = JSON.stringify(args);

    //         if(!rest[argsCache]){
    //             rest[argsCache] = fun.call(context || this , ...args);
    //             console.log(rest[argsCache]);
    //         }

    //         return rest[argsCache];
    //     };
    // };

    
    // const product = (num1, num2) => {
    //     for(let i =1 ; i <= 10000000 ; i++) {}

    //     return num1 * num2;
    // }
    
    // const mainMemoize = myMemoize(product);
    
    
    //     console.time("First Call");
    //     console.log(mainMemoize(1020,2030));
    //     console.timeEnd("First Call");
    

    // console.time("Second Call");
    // console.log(mainMemoize(1020,2030));
    // console.timeEnd("Second Call");



    // 11 creating the infinite currying or function loop



    // function add(a){
    //     return function(b){
    //         if(b) return add(a + b);

    //         return a;
    //     }
    // }

    // console.log(add(5)(5)(5)());


    // 12 curry( ) implementation 
    // converting the f(a,b,c) into f(a)(b)(c);


    // function curry(func){
    //     return function curryidFunc(...args){
    //         if(args.length >= func.length){
    //             return func(...args);
    //         }else{
    //             return function (...next){
    //                 return curryidFunc(...args,...next);
    //             }
    //         }

    //     }
    // }


    // const sum = (a,b,c) => a + b + c;

    // let totalSum = curry(sum);

    // console.log(totalSum(2)(5)(8));


    // if(true){
    //     variable = 10;
    // }
    // console.log(variable);
    // console.log(typeof variable);

    // let main = `new main`

    


    // finding the match for the given word

    // function findWord(word,match){
        
    //     for (let i = 0; i < word.length; i++) {

    //         if(word[i] == match){
    //             console.log('Found the match at : ' + i + ' for ' + `'${match}'`);
    //         }else{
    //             console.log(".............match not found at : " + i);
    //         }
            
    //     }
    // }

    // findWord('rushikesh','s');



    // Math object

    // creating the fun for all square of to 100 numbers


//    (function square(){

//         for (let i = 0; i <= 100; i++) {
//             console.log( i + ' = ' + Math.pow(i,2));
            
//         }
//     })();

    // creating the fun for the cube of to 100 numbers


//    (function square(){

//         for (let i = 0; i <= 100; i++) {
//             console.log( i + ' = ' + Math.pow(i,3));
            
//         }
//     })();


    // given array finding the small and large value using the spread operator with the Math object

    // let arr = [10,2,5,7,34,67675,45443,5,6,7,6543234,65432,4567898,1234567,];

    // console.log(Math.max(...arr));  // spread operator



    // genrating the random number in between 1000 to 10000

    // let min = 1000;
    // let max = 10000;

    // console.log(Math.floor(Math.random() * (max - min) ) + 1);


    // typeof with the parenthesis
    // let a = 'rhrh';
    // console.log(typeof a);
    // console.log(typeof (a));


    // string concatination

    // let a = 'Rishi';
    // let b = "Gurav";
    // console.log(a +" "+ b);

    // let c = 3434;
    // c= Number.parseInt(c);
    // console.log(typeof c);

    // for in and for off loop


    // let detail = {
    //     name: 'rushi',
    //     mob: 9832343434,

    // }

    // for (const index in detail) {
    //     console.log(index + " = " + detail[index]);
        
    // }
    
    
    // for (const i of detail.name) {
    //         console.log(i);
    // }


    // let string = 'new string';
    // console.log(string.charAt());


    // creating and deleting the arry value 

    // let arr = Array.from('rushi');
    // delete arr[2];
    // console.log(arr);     // index 2 = empty.


    // sorting the array in acending order amd decending orderr

    // let newArry = [1,2,4,54,65,6543,467,5435,665432,65432,567,4687,65876543,24567654];


    // let compair =(a,b) =>{
    //     return a - b; // for the acending order
    //     // return b - a;  // for the decending order

    // }

    
    
    // newArry.splice(2, 2 , "rushi","gurav")
    // console.log(newArry );
    
    // console.log(newArry.sort(compair));


    // spreading the array using the flat function
    // let arr = [1,2,3,
    // [1233,34,5,,6,,,5,4,33,22,3,3,],
    // [2223,3,333,34444,4545,556565,,354543345,,],
    // 4445,344];

    // console.log(arr.flat(Infinity));


    // array using the map function

    // let arr = [1,2,3,4,5];

    // arr.map((value,index,array ) =>{
    //     console.log(value,index,array);
    //     return ++value;    
    // })

    // // value - represent the actual value the array
    // // index - it represent the array index
    // // array - it represent the actual array



    // console.log(arr);


    // array with reduce 

    // let arr = [1,2,3,4,5,6,7,];

    // let arr2 = arr.reduce((a,b) =>{
    //     return b + a;
    // })

    // console.log(arr2);



    // que - crating the function for wether the number is  palindrome  or not 


    // let ispalindrome =   function(a){
    //     return a < 0 ? false :a === +a.toString().split('').reverse().join('');
    // }

    // let result = ispalindrome(121);
    // console.log(result);



    // que - function for the creating the fibonacci series


    // function fibo(n){
    //     let arr = [0,1];

    //     for (let i = 2; i <= n; i++) {
    //         arr.push(arr[i - 1] + arr[i - 2]);
    //     }
    //     console.log(arr);
    // }

    // fibo(10);


    // different way to create this using the recuursion function

    // const func = (n) => (n <= 1 ? n : func(n - 1) + func(n - 2));

    // console.log(func(10)); // it will give the actual result




    // two sums 
    // given an array and find the targated value is equal to by adding  the which index values  of the array
    // exa = [2,3,4,5,6] , target value = 9;


    // const tarVAlue = (nums,target) =>{

    //     for (let i = 0; i < nums.length; i++) {
    
    //         for (let j = i + 1; j < nums.length; j++) {

    //             if(nums[i] + nums[j] === target) return [i,j];
    //         }
    //     }
    // }

    // console.log(tarVAlue([2,3,4,5,6,7],10));
    
    
    // other solution for this example

    // const find = (nums,target) =>{

    //     var obj ={};

    //     for (let i = 0; i < nums.length; i++) {
            
    //         let n = nums[i];

    //         if(obj[target - n] >= 0){
    //             return [obj[target - n],i];
    //         }else{
    //             obj[n] = i;
    //         }
    //     }
    //  }
     
     
    //  console.log(find([2,3,4,5,6,7],10));



    // Ques 5 - Best Time to Buy and Sell Stocks
// You are given an array prices where prices[i] is the price of a given stock
// on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock
// and choosing a different day in the future to sell that stock.
// Return the maximum profit, If you cannot achieve any profit, return 0.

// Input: prices = [7, 1, 5, 3, 6, 4];  ----->>>>>  Output: 5;
// Input: prices = [7, 6, 4, 3, 1];     ----->>>>>  Output: 0;


        // first solution

        // const profit = (values) =>{
        //     let gloableProfit = 0;

        //     for (let i = 0; i < values.length - 1; i++) {

        //         for (let j = i + 1; j < values.length; j++) {
                    
        //             let curruntProfit = values[j] - values[i];
        //             if(curruntProfit > gloableProfit) gloableProfit = curruntProfit;

        //         }

        //     }
        //     return gloableProfit;
        // }


        // console.log(profit([7, 6, 4, 3, 1]));
        
        

        // second solution


        // const maxValue = (prices) =>{

        //     let minStockPurchasePrice = prices[0] || 0;
        //     let profit = 0;
            
        //     for (let i = 0; i < prices.length; i++) {

            //         if(prices[i] < minStockPurchasePrice){
            //             minStockPurchasePrice = prices[i];
            //         }

        //         profit = Math.max(profit,prices[i] - minStockPurchasePrice);
        //         console.log(profit,i);
                
        //     }

        //     return profit;
        // }


        // console.log(maxValue([7, 1, 5, 3, 6, 4]));