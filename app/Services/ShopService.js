import { ProxyState } from ("./AppState.js");
import Item from "./Models/item.js"

function addFunds(){
    ProxyState.money+=20
    alert(ProxyState.money)
}