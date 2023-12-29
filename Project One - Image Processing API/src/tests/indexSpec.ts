import supertest from 'supertest'; // import supertest to test HTTP requests/responses
import app from '../index'; // import express app

const request = supertest(app); // supertest agent

// Test the /api route
describe('GET /api', () => {
  it('should return 200 OK status and HTML page', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });
});

// Test the /api/resize route with valid query string
describe('GET /api/resize', () => {
  it('should return 200 status when passing correct query string', async () => {
    const response = await request.get(
      '/api/resize?filename=waterfall&width=1000&height=700'
    );
    expect(response.status).toBe(200);
  });
});

// Test the /api/resize route with invalid query string type
describe('GET /api/resize', () => {
  it('should return 400 status when passing incorrect query string', async () => {
    const response = await request.get(
      '/api/resize?filename=waterfall&width=1000&height=sevenhundred'
    );
    expect(response.status).toBe(400);
  });
});

// Test the /api/resize route with wrong filename query string
describe('GET /api/resize', () => {
  it('should return 404 status when missing query string', async () => {
    const response = await request.get(
      '/api/resize?filename=myImage&width=1000&height=700'
    );
    expect(response.status).toBe(404);
  });
});
