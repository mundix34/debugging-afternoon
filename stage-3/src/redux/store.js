import reducer from './reducer';
import {createStore} from 'redux';
export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


// import reduxPromiseMiddleware from 'redux-promise-middleware';

// export default createStore(reducer, applyMiddleware(reduxPromiseMiddleware()));



// import reducer from './ducks/reducer';
