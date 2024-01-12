import { merge } from '../src/index';

test('should merge two sorted lists and return a sorted list', () => {
    const collection1 = [1,3,5,7,9];
    const collection2 = [2,4,6,8,10];
    const expectedResult = [1,2,3,4,5,6,7,8,9,10];
    expect(merge(collection1, collection2)).toEqual(expectedResult);
});

test('should handle empty lists',()=>{
    const collection1: number[] = [];
    const collection2 = [2,5,7,9,11];
    const expectedResult = [2,5,7,9,11];
    expect(merge(collection1, collection2)).toEqual(expectedResult);
});

test('should handle both empty lists',()=>{
    const collection1: number[] = [];
    const collection2: number[] = [];
    const expectedResult = [];
    expect(merge(collection1, collection2)).toEqual(expectedResult);
});
