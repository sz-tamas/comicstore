import { expect, assert } from 'chai'

import comics from '../reducers/Comics'

describe('Reducer: Comics', function() {
    it('should return the initial state', function() {
        assert.deepEqual(comics(undefined, {}), {
            attributionText: '',
            data: {results: []},
            fetching: false,
            fetched: false,
            error: null
        });
    });

    it('should return with fetch start state', function() {
         assert.deepEqual(comics(undefined, {type: 'FETCH_COMICS_START'}), {
             attributionText: '',
             data: {results: []},
             error: null,
             fetched: false,
             fetching: true
         });
    });

    it('should return with error state', function() {
        assert.deepEqual(comics(undefined, {type: 'FETCH_COMICS_REJECTED', data: 'xxx:error'}), {
            attributionText: '',
            data: {results: []},
            error: 'xxx:error',
            fetched: false,
            fetching: false
        });
    });

    it('should return with fetched state', function() {
        const data = {
            attributionText: 'copyright',
            data: {results: [1, 2, 3]}
        };
        assert.deepEqual(comics(undefined, {type: 'FETCH_COMICS_FULFILLED', data}), {
            ...data,
            error: null,
            fetched: true,
            fetching: false
        })
    });
});