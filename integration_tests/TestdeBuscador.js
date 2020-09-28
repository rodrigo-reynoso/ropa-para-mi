const { Builder, By, } = require("selenium-webdriver");
const driver = new Builder().forBrowser("firefox").build();
const  assert = require("assert");

     driver.get("http://127.0.0.1:5500/index.html"); /*este link tiene que ser modificado dependiendo del repositorio local de cada uno*/
     driver.findElement(By.name("busqueda")).sendKeys("camisa");
     driver.findElement(By.id("icono")).click();
     driver.findElement(By.id("search")).getAttribute("busqueda...").then(function(txt){
    console.log("el elemento es" + txt);    
    });
    

