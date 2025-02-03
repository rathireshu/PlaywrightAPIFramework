const {test, expect} = require('@playwright/test');

const testData = require('../apiTestData.json');

test.only('APIs Testing', async ({request}) => {

 const getResponse = await request.get(`${testData.baseUrl}`, { params: { name: '2' } });
 // Validate status code
 expect(getResponse.status()).toBe(200)


// Validate response text message
const statusMsg = getResponse.statusText();
console.log('status message is :' + statusMsg);
expect(getResponse.ok()).toBeTruthy();

expect.soft(statusMsg).toBe('OK');
expect(statusMsg).toContain('OK');

const responseBody = await getResponse.text();
//console.log('response body is :'+responseBody);

 //Schema validation
 const data =  await getResponse.json();
 expect(data.data[0]).toHaveProperty('id');
 expect(data.data[0]).toHaveProperty('email');
 expect(data.data[0]).toHaveProperty('first_name');
 expect(data.data[0]).toHaveProperty('last_name');
 expect(data.data[0]).toHaveProperty('avatar');


const postResponse = await request.post('https://reqres.in/api/users',{data : {name: 'testreq' , job: 'apitest'}});
expect(postResponse.status()).toBe(201);
const postData =  await postResponse.json();
 //console.log(postData);
 //expect(postData.title).toBe('New Post');
 expect(postData.name).toBe('testreq');



})