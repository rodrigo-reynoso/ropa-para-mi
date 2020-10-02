const { Builder, By, until } = require("selenium-webdriver");
const driver = new Builder().forBrowser("firefox").build();
const assert = require("assert");

async function TestdeBusqueda() {

    const RopaBuscada = "pantalon";



    await driver.get("http://127.0.0.1:5500/index.html"); /*este link tiene que ser modificado dependiendo del repositorio local de cada uno*/
    await driver.findElement(By.name("busqueda")).sendKeys(RopaBuscada);
    await driver.findElement(By.id("icono")).click(); try {
        await driver.wait(until.titleIs("Página de Busqueda"), 1000);
    }                                                  /*en .getAttribute podes poner cualquier atributo del "input" de busqueda.html en este caso es "type"  */
    finally {
        await driver.findElement(By.css("input")).getAttribute("value").then(function (SearchValue) {
            assert.strictEqual(RopaBuscada, SearchValue, "el test fallo");


        });
    }


}

TestdeBusqueda();