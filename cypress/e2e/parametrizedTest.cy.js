
  // it('passes', () => {
  //   cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com')
    
  //   cy.log('Пошук локатора теми і клік по темі');
  //   cy.get('[alt="Material Dark Theme"]').click();

  //   cy.log('Відкриття пункт меню Forms');
  //   cy.get('[class="menu-title ng-tns-c141-9"]').click();

  //   cy.log('Відкриття пункт меню Forms Layouts');
  //   cy.get('[class="menu-title ng-tns-c141-11"]').click();
  // })


  describe('parametrizedTest', () => {

    const imputData = [
      {
        email: 'test@gmail.com',
        password: '123454321'
      },
      {
        email: 'test1@gmail.com',
        password: '1234543211'
      },
      {
        email: 'test2@gmail.com',
        password: '12345432112'
      },
      {
        email: 'test3@gmail.com',
        password: '123454321123'
      },
      {
        email: 'test4@gmail.com',
        password: '1234543211234'
      }
    ]

    imputData.forEach(dataImput => {
      it(`imputEmailPassword: ${dataImput.email}`, () => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com')

        cy.log('Пошук локатора теми і клік по темі');
        cy.get('[alt="Material Dark Theme"]').click();
    
        cy.log('Відкриття пункт меню Forms');
        cy.get('[class="menu-title ng-tns-c141-9"]').click();
    
        cy.log('Відкриття пункт меню Forms Layouts');
        cy.get('[class="menu-title ng-tns-c141-11"]').click();

        cy.get('[id=inputEmail1]').click().type(dataImput.email);
        cy.get('[id="inputPassword2"]').click().type(dataImput.password);
        cy.get('[class="appearance-filled size-medium shape-rectangle status-primary nb-transition"]:last').click();
      })
    })

})