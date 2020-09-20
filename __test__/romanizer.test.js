import {transformValue} from "../src/romanizer";

describe('romanizer', () => {
    it('should return X when input 10', () => {
        expect(transformValue(10)).toEqual('X');
    })
})