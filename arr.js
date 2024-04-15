// let prices = [10,20,30,40,50,60]
// let popped = prices[prices.length - 1]
// console.log(popped);

// let combine = prices.join()
// console.log(combine);

// let = prices.toString()
// console.log(str.replaceAll(",", "-"));
// console.log(str.replace(/,/g, "-"));

// let fruits = ["banana", "nabgo", "coconut", "grape", "orange"]
// let fstr = fruits.toString()
// let upper fstr.toUpperCase()
// console.log(upper);

// let includesA = fruits.filter((f)=> f.includes("a"))
// console.log(includesA);

// let yokao = {
// hairColor: "black",
// eyeColor: "black",
// noseSize: "lager"
// height: "200cm",
// sleeping: function () {
//     console.log("Current state is sleeping");
// },
// seeBenzene: 

// }


let store= [
    {brand: "infinix Hot 30", prices: 20},
    {brand: "Tecon Camon 30", prices: 40},
    {brand: "Samsung note 10", prices: 200}
    {brand: "iPhone XR", prices: 150}
    (brand: "Oppo", prices: 1000)
]
store.forEach((item)=>{
    console.log(item.prices);
})
let update
let cart = store.reduce((currentTotal, item)=>{
    return item.pricesTotal

},0)
let newTotal = 0.10*cart

console.log(cart);