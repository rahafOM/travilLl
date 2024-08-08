const request = require('supertest');
const app = require('../src/server/server'); // Adjust the path as needed

let server;
let port;

// Setup and Teardown
beforeAll((done) => {
  server = app.listen(8081, () => {
    port = server.address().port;
    done();
  });
});

afterAll((done) => {
  server.close(done);
});

// Example Test
describe('Server Tests', () => {

  // Test if the server is running on the correct port
  test('PORT should be set to 8081', () => {
    expect(port).toBe(8081);
  });

  // Test for an endpoint
  test('GET /some-endpoint should return 200 status', async () => {
    console.log('Testing /some-endpoint'); // Debug log
    const response = await request(app).get('/some-endpoint');
    console.log('Response status code:', response.statusCode); // Debug log
    expect(response.statusCode).toBe(200);
  });

});
