import express from 'express';
import request from 'supertest';

const app = express();

app.get('/user', function (req, res) {
  res.status(200).json({ name: 'john' });
});

describe('test-user e2e', () => {
  test('findOne user', async () => {
    const response = await request(app).get('/user').set('Content-Type', 'application/json');

    const { status } = response;
    expect(status).toBe(200);
  });
});
