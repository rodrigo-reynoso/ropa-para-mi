const { Builder, By, } = require("selenium-webdriver");

const driver = new Builder()
.forBrowser("firefox")
.build();

async function TestdeBuscador() {
  try {
    await driver.get("http://127.0.0.1:5500/index.html");
    await driver.findElement(By.name("busqueda")).sendKeys("camisa");
  } catch (error) {
    console.log(error);
  }
}

TestdeBuscador();