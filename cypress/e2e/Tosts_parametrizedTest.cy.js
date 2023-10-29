
  describe('Toasts_parametrizedTest', () => {

    const inputData = [
      {
        position: 'top-right',
        title: 'Toast_test_1',
        content:'qwe',
        toast_type: 'primary',
        time: '1000',
        expectedResult: 
          {
            icon: 'email',
            title: 'Toast_test_1',
            content: 'qwe',
            color: 'rgb(233, 29, 99)',
            position: 'cdk-overlay-2'
          } 
        },
      {
        position: 'top-left',
        title: 'Toast_test_2',
        content:'qweqwe',
        toast_type: 'success',
        time: '1000',
        expectedResult:
          {
          icon: 'checkmark',
          title: 'Toast_test_2',
          content: 'qweqwe',
          color: 'rgb(96, 175, 32)',
          position: 'cdk-overlay-4'
          }
        },
      {
        position: 'bottom-right',
        title: 'Toast_test_3',
        content:'toast with surprise',
        toast_type: 'info',
        time: '1000',
        expectedResult:
          {
          icon: 'question-mark', 
          title: 'Toast_test_3',
          content: 'toast with surprise',
          color: 'rgb(4, 149, 238)',
          position: 'cdk-overlay-3'
          }
        },
      {
        position: 'bottom-left',
        title: 'Toast_test_4',
        content:'toast without surprise',
        toast_type: 'warning',
        time: '1000',
        expectedResult:
          {
          icon: 'alert-triangle', 
          title: 'Toast_test_4',
          content: 'toast without surprise',
          color: 'rgb(255, 159, 5)',
          position: 'cdk-overlay-4'
          }
        },
      {
        position: 'top-start',
        title: 'Toast_test_5',
        content:'bonus',
        toast_type: 'success',
        time: '1000',
        expectedResult:
          {
          icon: 'checkmark',
          title: 'Toast_test_5',
          content: 'bonus',
          color: 'rgb(96, 175, 32)',
          position: 'cdk-overlay-5'
          }
        }      
    ]


    beforeEach(() => {
      cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com')

      cy.log('Пошук локатора теми і клік по темі');
      cy.get('[alt="Material Dark Theme"]').click();
  
      cy.log('Відкриття пункт меню "Modal & Overlays"');
      cy.get('[class="menu-title ng-tns-c141-19"]').click();
  
      cy.log('Відкриття пункт меню "Toastr"');
      cy.get('[class="menu-title ng-tns-c141-23"]').click();
    })

    inputData.forEach(dataInput => {

      it(`inputDataForToasts: ${dataInput}`, () => {        

        cy.log('Обрати Position');
        cy.get('[class="mat-ripple position-select appearance-outline size-medium status-basic shape-rectangle nb-transition"]').click();
        cy.get(`[ng-reflect-value="${dataInput.position}"]`).click();        

        cy.log('Ввести Title');
        cy.get('[ng-reflect-name="title"]').click().clear().type(dataInput.title);

        cy.log('Ввести Content');
        cy.get('[ng-reflect-name="content"]').click().clear().type(dataInput.content);

        cy.log('Ввести Time to hide toast');
        cy.get('[ng-reflect-name="timeout"]').click().clear().type(dataInput.time);

        cy.log('Обрати Toast type');
        cy.get('[class="mat-ripple appearance-outline size-medium status-basic shape-rectangle nb-transition"]').click();
        cy.get(`[ng-reflect-value="${dataInput.toast_type}"]`).click();

        cy.log('Клік Show Toast');
        cy.get('[class="mat-ripple appearance-filled size-medium shape-rectangle status-basic nb-transition"]').click()
        


        cy.log('Перевірка Toast');
        dataToastER => {
          cy.get('[class="cdk-overlay-pane"]')
          .then( toastData  => {
            expect(toastData).have.attr('data-name', dataToastER.expectedResult.icon);
            expect(toastData.text()).to.include(dataToastER.expectedResult.title);
            expect(toastData).to.contain(dataToastER.expectedResult.content);
            expect(toastData).to.have.css('border-color', dataToast.expectedResult.color);
            expect(toastData).have.attr('id', dataToast.expectedResult.position);          
          })
        }
      })
    })
})

