// import Item from "./Models/Item.js"
// import ShopService from "./Services/ShopService.js"
import {ProxyState} from "../AppState.js"
function drawShop(){
}
function drawCart(){
}
function drawFunds(){
}
function deleteItem(){
}


export default class ShopController{
    constructor(){ProxyState.on("money", drawFunds)}
addFunds(){
// ShopService.addFunds()
console.log("Add Funds")}
}