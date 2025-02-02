const {test, expect} = require('@playwright/test');

const testData = require('../apiTestData.json');

test.only('APIs Testing', async ({request}) => {

 const getResponse = await request.get(`${testData.baseUrl}`, { params: { name: '2' } });

 expect(getResponse.status()).toBe(200)
 const data =  await getResponse.json();
 console.log(data);
 //schema validation

 expect(data.data[0]).toHaveProperty('id');
 expect(data.data[0]).toHaveProperty('email');
 expect(data.data[0]).toHaveProperty('first_name');
 expect(data.data[0]).toHaveProperty('last_name');
 expect(data.data[0]).toHaveProperty('avatar');


const postResponse = await request.post('https://reqres.in/api/users',{data : {name: 'testreq' , job: 'apitest'}});
expect(postResponse.status()).toBe(201);
const postData =  await postResponse.json();
 console.log(postData);
 expect(postData.name).toBe('testreq');



})