const {test, expect} = require('@playwright/test');


test.only('getRequestTest', async ({request}) => {

 const response = await request.get('https://reqres.in/api/users');

 expect(response.status()).toBe(200)





})