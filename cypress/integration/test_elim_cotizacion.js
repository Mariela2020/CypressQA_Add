describe('TC AddInmobiliario-Cotizar', function() 
{
   const d = new Date
   const date = [d.getDate(),
    d.getMonth() + 1,
    d.getFullYear()].join('-') 
  
   const hora = [d.getHours(),
    d.getMinutes(),
    d.getSeconds()].join(':')

  it('Flujo elimina cotizacion un Inmueble',function ()  
  {
    cy.visit('https://www.addinmobiliario.cl/')
    cy.title().should('eq','AddInmobiliario') 

    cy.get('#ctl00_ContentPlaceHolder1_Ctrllogin_Login1_UserName').type('mariela.hurtado@toctoc.com')
    cy.get('#ctl00_ContentPlaceHolder1_Ctrllogin_Login1_Password').type('pruebaadd',{sensitive: true})
    cy.get('#ctl00_ContentPlaceHolder1_Ctrllogin_Login1_LoginButton').click()
    cy.get('#ctl00_cabecera1_lblUsuario').should('be.visible').and('contain','Mariela Hurtado')
    
   /* cy.get('#ctl00_Ctrlmenu_ASPxMenu1_DXI2_P').click()
    cy.get('#ctl00_Ctrlmenu_ASPxMenu1_DXI2i2_T').click()
    cy.xpath('/html/body/form/div[3]/div[2]/div[1]/div/div[2]/table/tbody/tr/td[2]/div[11]/table/tbody/tr/td/table/tbody/tr[3]/td/a').click()
    cy.get('#ctl00_ContentPlaceHolder1_lblTitulo').should('be.visible').and('contain','Listado de Cotizaciones')
    cy.get('#ctl00_ContentPlaceHolder1_txtRut').type('77119483-4')
    cy.get('#ctl00_ContentPlaceHolder1_btnBuscar').click()
    cy.get('.dxgv').should('be.visible').and('contain','Toctoc')
    */
   // cy.xpath('//*[@id="ctl00_ContentPlaceHolder1_gvDatos_tccell1_37"]/a[6]/img').click()
   // cy.xpath('/html/body/form/div[3]/div[2]/div[2]/table/tbody/tr/td/div/table[1]/tbody/tr[2]/td/h1').should('be.visible').and('contain','Cancelar Cotización')
   // cy.get('#ctl00_ContentPlaceHolder1_btnCancelar').click()
   // cy.get('#ctl00_ContentPlaceHolder1_lbltxtTitulo').should('be.visible')
    

  })

})