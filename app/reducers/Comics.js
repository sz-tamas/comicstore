const Comics = (state = {
    attributionText: '',
    data: {results: []},
    fetching: false,
    fetched: false,
    error: null
}, action) => {
    switch (action.type) {
        case 'FETCH_COMICS_START':
            return {
                ...state,
                fetched: false,
                fetching: true,
            };
        case 'FETCH_COMICS_REJECTED':
            return {
                ...state,
                fetched: false,
                fetching: false,
                error: action.data
            };
        case 'FETCH_COMICS_FULFILLED':
            return {
                ...state,
                fetched: true,
                fetching: false,
                ...action.data
            };
        default: return state;
    }
};

export default Comics;