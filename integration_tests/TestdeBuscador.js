const  assert = require("assert");
const { Builder, By, } = require("selenium-webdriver");


 

const driver = new Builder().forBrowser("firefox").build();

async function TestdeBuscador() {
  try {
    
    
    await driver.get("http://127.0.0.1:5500/index.html"); /*este link tiene que ser modificado dependiendo del repositorio local de cada uno*/
    await driver.findElement(By.name("busqueda")).sendKeys("camisa");
    await driver.findElement(By.id("icono")).click();
    await driver.findElement(By.id("search")).getText();
  
    const text = await driver.findElement(By.id("search")).getText();
    
    assert.equal(text, "camisa");
  
  } catch (error) {
    console.log(error);
  }

}

TestdeBuscador();


