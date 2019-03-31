import { what } from './test.js'

describe('대주제',function(){
    it('조건',function(){
        expect(what(1,2)).toBe(3)
    });
});