/// <reference types="Cypress" />

describe('All routes test from jsonplaceholder', () => {

    // it("GET API testing Using Cypress API Plugin", () => {
    //     cy.api("GET", "https://jsonplaceholder.typicode.com/posts").should((response) => {
    //       expect(response.status).to.eq(200);
    //     });
    //   });
    
    it('Get All Mock Posts, Requesting /posts', () => {


        cy.fixture('posts').then(myFixture => {

            cy.request({
              method: 'GET',
              url: 'https://jsonplaceholder.typicode.com/posts',
            }).then((response) => {
                console.log('Response status:', response.status)
                console.log('Response body:', myFixture)
               })
          });
    
    
    })


    it('Get a single Mock Post, Requesting /posts/1', () => {


        cy.fixture('post').then(myFixture => {

            cy.request({
              method: 'GET',
              url: 'https://jsonplaceholder.typicode.com/posts/1',
            }).then((response) => {
                console.log('Response status:', response.status)
                console.log('Response body:', myFixture)
               })
          });
    
    
    })

    it('Get All Mock Comments of Post 1, Requesting /posts/1/comments', () => {


        cy.fixture('comments').then(myFixture => {

            cy.request({
              method: 'GET',
              url: 'https://jsonplaceholder.typicode.com/posts/1/comments',
            }).then((response) => {
                console.log('Response status:', response.status)
                console.log('Response body:', myFixture)
               })
          });
    
    
    })


    it('Create a Post, Requesting /posts', () => {


        cy.fixture('post').then(myFixture => {

            cy.request({
              method: 'POST',
              url: 'https://jsonplaceholder.typicode.com/posts',
              body: myFixture,
            }).then((response) => {
                console.log('Response status:', response.status)
                console.log('Response body:', myFixture)
               })
          });
    
    })

    it('Update a Post, Requesting /posts/1', () => {


        cy.fixture('updatedPostPayload').then(myFixture => {

            cy.request({
              method: 'PATCH',
              url: 'https://jsonplaceholder.typicode.com/posts/1',
              body: myFixture,
            }).then((response) => {
                console.log('Response status:', response.status)
                console.log('Response body:', myFixture)
               })
          });
    
    })

    it('Get a single Mock Post, Requesting /posts/1', () => {


        cy.fixture('post').then(myFixture => {

            cy.request({
              method: 'GET',
              url: 'https://jsonplaceholder.typicode.com/posts/1',
            }).then((response) => {
                console.log('Response status:', response.status)
                console.log('Response body:', response.body)
               })
          });
    
    
    })


  });
  