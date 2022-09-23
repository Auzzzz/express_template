const request = require('supertest')
const app = require('../../src/app')

describe("Testing", () => {
    describe("test 1", () =>{
        test('test for /test', async () => {
            const res = await request(app).get('/test');
            expect(res.header['x-powered-by']).toBe('Express');
            expect(res.header['content-length']).toBe('46');
            expect(res.header['content-type']).toBe('application/json; charset=utf-8');
           
        })
    })
})