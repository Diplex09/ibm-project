import reducer from '../reducers/authSlice';

describe('Tests in authSlice.js', () => {
    test('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            checking: true,
        });
    });
});
