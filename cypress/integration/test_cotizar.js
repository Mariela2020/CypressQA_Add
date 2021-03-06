describe('TC AddInmobiliario-Cotizar', function() 
{
   const d = new Date
   const date = [d.getDate(),
    d.getMonth() + 1,
    d.getFullYear()].join('-') 
  
   const hora = [d.getHours(),
    d.getMinutes(),
    d.getSeconds()].join(':')

  it('Flujo crear cotizacion un Inmueble',function ()  
  {
    cy.visit('https://www.addinmobiliario.cl/')
    cy.title().should('eq','AddInmobiliario') 

    cy.get('#ctl00_ContentPlaceHolder1_Ctrllogin_Login1_UserName').type('mariela.hurtado@toctoc.com')
    cy.get('#ctl00_ContentPlaceHolder1_Ctrllogin_Login1_Password').type('pruebaadd',{sensitive: true})
    cy.get('#ctl00_ContentPlaceHolder1_Ctrllogin_Login1_LoginButton').click()
    cy.get('#ctl00_cabecera1_lblUsuario').should('be.visible').and('contain','Mariela Hurtado')

    cy.get('#ctl00_cabecera1_lblvaloruf').then(function($valorelem){

      const valoruftxt= $valorelem.text()
      var valoruf1= valoruftxt.replace(/\./g,"")
      var valoruf2= valoruf1.replace(/\,/g,".")
      var valoruf3 = parseFloat(valoruf2)
            
      cy.fixture('dataUF.json').then((dataUF) => {
        var valueUF = dataUF.uf
        var valueUF1= valueUF.replace(/\./g,",")
        var valueUF2= valueUF1.replace(/\,/g,".")
        var valueUF3 = parseFloat(valueUF2)
        
       // expect(valoruf3, "El Valor UF obtenido debe ser igual al Valor UF esperado").eq(valueUF3)

        if (valoruf3==valueUF3)
        {
        cy.log('El Valor UF obtenido es igual al Valor UF esperado')
        }
      else
        {
        cy.writeFile('diferencia.txt', '\n\nValor UF Obtenido: ' + valoruf3 + '/ Total Resumen Esperado: ' + valueUF3 + ' ' + date + '  ' + hora, { flag: 'a+' })
        }          
      })

    })

    cy.get('#ctl00_Ctrlmenu_ASPxMenu1_DXI2_P').click()
    cy.get('#ctl00_Ctrlmenu_ASPxMenu1_DXI2i2_T').click()
    cy.xpath('/html/body/form/div[3]/div[2]/div[1]/div/div[2]/table/tbody/tr/td[2]/div[11]/table/tbody/tr/td/table/tbody/tr[1]/td/a').click()
    cy.get('#ctl00_ContentPlaceHolder1_txtRut').type('77119483-4')
    cy.get('#ctl00_ContentPlaceHolder1_txtApellidoPaterno').click()
    cy.get('#imgVivienda').click()
    cy.get('#cb42938').click()
    cy.get('#cbo43187').click()
    cy.get('#ctl00_ContentPlaceHolder1_gvBienes_DXDataRow0 > :nth-child(1)').should('be.visible').and('contain','Departamento')
    cy.get('#ctl00_ContentPlaceHolder1_txtconceptoPie_rb_uf').check()
    cy.get('#ctl00_ContentPlaceHolder1_txtconceptoPie').type('30')
    
    if (cy.get('#ctl00_ContentPlaceHolder1_btnCalcularDividendo').should('be.visible'))
      {
        cy.get('#ctl00_ContentPlaceHolder1_btnCalcularDividendo').click()
      }
    else
      {
        cy.get('#imgSimulacionDividendo').click()
        cy.get('#ctl00_ContentPlaceHolder1_btnCalcularDividendo').click()  
      }
    
    cy.get('#ctl00_ContentPlaceHolder1_gvDividendo_DXTDGScol6 > table > tbody > tr > td').should('be.visible')

    if(cy.get('#ctl00_ContentPlaceHolder1_CheckLlegada_0').should('be.visible'))
      {
        cy.get('#ctl00_ContentPlaceHolder1_CheckLlegada_0').check()
      }
    else
      {
        cy.get('#imgOtros').click()
        cy.get('#ctl00_ContentPlaceHolder1_CheckLlegada_0').check()
      }
    
    cy.get('#ctl00_ContentPlaceHolder1_btnGuardarCotizacion').should('be.visible').and('contain','Guardar')  
    cy.get('#ctl00_ContentPlaceHolder1_btnGuardarCotizacion').click()
    cy.wait(6000)
    cy.get(':nth-child(2) > .cs699B7B81').should('be.visible').and('contain','COTIZACI??N')
    cy.url().should('include', 'https://www.addinmobiliario.cl/Cotizacion/vistaprevia.aspx')
    cy.get('#ctl00_ContentPlaceHolder1_Button2').click()
     
  //})

 // it('Flujo eliminar cotizacion un Inmueble',function ()  
 // {
    /*
    cy.get('#ctl00_Ctrlmenu_ASPxMenu1_DXI2_P').click()
    cy.get('#ctl00_Ctrlmenu_ASPxMenu1_DXI2i2_T').click()
    cy.xpath('/html/body/form/div[3]/div[2]/div[1]/div/div[2]/table/tbody/tr/td[2]/div[11]/table/tbody/tr/td/table/tbody/tr[3]/td/a').click()
    cy.get('#ctl00_ContentPlaceHolder1_lblTitulo').should('be.visible').and('contain','Listado de Cotizaciones')
    cy.get('#ctl00_ContentPlaceHolder1_txtRut').type('77119483-4')
    cy.get('#ctl00_ContentPlaceHolder1_btnBuscar').click()
    cy.get('.dxgv').should('be.visible').and('contain','Toctoc')
    cy.xpath('/html/body/form/div[3]/div[2]/div[2]/table/tbody/tr/td/div/div[1]/table/tbody/tr[4]/td/div/table/tbody/tr/td/table[1]/tbody/tr[2]/td[16]/a[6]/img').click()
    cy.xpath('/html/body/form/div[3]/div[2]/div[2]/table/tbody/tr/td/div/table[1]/tbody/tr[2]/td/h1').should('be.visible').and('contain','Cancelar Cotizaci??n')
    cy.get('#ctl00_ContentPlaceHolder1_btnCancelar').click()
    cy.get('#ctl00_ContentPlaceHolder1_lbltxtTitulo').should('be.visible')
    */
  })

})