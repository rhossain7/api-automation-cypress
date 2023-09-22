/// <reference types="Cypress" />

describe('All routes test from jsonplaceholder', () => {

    it('Get All Posts, Requesting /posts', () => {
        cy.api("GET", "https://jsonplaceholder.typicode.com/posts").should((response) => {
          expect(response.status).to.eq(200);
          expect(response.body[0].title).to.eq('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
          expect(response.body[0].body).to.eq('quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto');

        });
      });

      it('Get a single Post, Requesting /posts/1', () => {
        cy.api("GET", "https://jsonplaceholder.typicode.com/posts/1").should((response) => {
            console.log(response)
          expect(response.status).to.eq(200);
          expect(response.body.title).to.eq('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
          expect(response.body.body).to.eq('quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto');
        });
      });
    
      
    it('Create Post, Requesting /posts', () => {

        const reqPayload = {
            title: "RootNext",
            body: "Best in Test",
            userId: 1,
        } 

        cy.api("POST", "https://jsonplaceholder.typicode.com/posts", reqPayload).should((response) => {
          expect(response.status).to.eq(201);
          expect(response.body.title).to.eq(reqPayload.title);
          expect(response.body.body).to.eq(reqPayload.body);

        });
      });


      it('Update a Post, Requesting /posts', () => {

        const reqPayload = {
            title: "RootNext",
            body: "Best in World",
            userId: 1,
        } 

        cy.api("PUT", "https://jsonplaceholder.typicode.com/posts/1", reqPayload).should((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.title).to.eq(reqPayload.title);
          expect(response.body.body).to.eq(reqPayload.body);
        });
      });


      it('Delete a Post, Requesting /posts', () => {
        cy.api("DELETE", "https://jsonplaceholder.typicode.com/posts/1").should((response) => {
            expect(response.status).to.eq(200);

        });
      });


  });
  