// import ValuesController from "./Controllers/ValuesController.js";
import ShopController from "./Controllers/ShopController.js";

class App {
  // ValuesController = new ValuesController();
  ShopController = new ShopController();
}

window["app"] = new App();
