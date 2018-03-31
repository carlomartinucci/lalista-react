import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const SCORE_POINT = 'SCORE_POINT';
const ROLLBACK_SCORE_POINT = 'ROLLBACK_SCORE_POINT';

// const reducer = (state, action) => state;

// 1 user clicca segna
// 2 aggiorno ottimisticamente la ui
// 3 faccio il fetch in post per aggiornare
// 4 se la risposta è positiva, sono a posto
// 5 se la risposta è negativa, torno indietro e mostro un errore

const rankingState = [
  // {
  //   points_count: 0,
  //   person: {
  //     id: 'fake1',
  //     name: 'Nome',
  //   },
  // }, {
  //   points_count: 0,
  //   person: {
  //     id: 'fake2',
  //     name: 'Nome',
  //   },
  // },
];
// questo è il punto 2
// state : [{points_count, person}]
// action: {type: 'SCORE_POINT', payload: {person, point}}
// action: {type: 'UPDATE_RANKINGS', payload: [{rank1}, {rank2}]}
const rankingReducer = (state = rankingState, action) => {
  switch (action.type) {
    case SCORE_POINT:
      return state.map((rank) => {
        if (rank.person.id === action.payload.person.id) {
          return { ...rank, points_count: rank.points_count + 1 };
        }
        return rank;
      });
    case ROLLBACK_SCORE_POINT:
      return state.map((rank) => {
        if (rank.person.id === action.payload.person.id) {
          return { ...rank, points_count: rank.points_count - 1 };
        }
        return rank;
      });
    case 'UPDATE_RANKING':
      return action.payload;
    default:
      return state;
  }
};

const peopleState = [];

const peopleReducer = (state = peopleState, action) => {
  switch (action.type) {
    case 'UPDATE_PEOPLE':
      return action.payload;
    default:
      return state;
  }
};

const wordsState = [];

const wordsReducer = (state = wordsState, action) => {
  switch (action.type) {
    case 'UPDATE_WORDS':
      return action.payload;
    default:
      return state;
  }
};

const snackbarState = { message: '', open: false };

const snackbarReducer = (state = snackbarState, action) => {
  switch (action.type) {
    case 'CLOSE_SNACKBAR':
      return { ...state, open: false };
    case SCORE_POINT:
      return { open: true, message: `Ho segnato "${action.payload.word.name}" a ${action.payload.person.name}` };
    case 'FETCH_FAILED':
      return { open: true, message: 'Errore di connessione con il server' };
    case ROLLBACK_SCORE_POINT:
      return { open: true, message: `Non ho segnato "${action.payload.word.name}" a ${action.payload.person.name}` };
    default:
      return state;
  }
};

// const uiState = {
//   personName: null,
//   wordName: null,
// };

// const uiReducer = (state = uiState, action) => {
//   switch (action.type) {
//     case 'SELECT_PERSON':
//       return { ...state, personName: action.payload };
//     case 'SELECT_WORD':
//       return { ...state, wordName: action.payload };
//     default:
//       return state;
//   }
// };

const rootReducer = combineReducers({
  people: peopleReducer,
  ranking: rankingReducer,
  words: wordsReducer,
  snackbar: snackbarReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
);

export default store;


// const state = [
//     {
//       "points_count": 0,
//       "person": {
//         "id": 'fake1',
//         "name": "Nome",
//       }
//     }, {
//       "points_count": 0,
//       "person": {
//         "id": 'fake2',
//         "name": "Nome",
//       }
//     },
//   ]

// const endState = [
//     {
//       "points_count": 1,
//       "person": {
//         "id": 'fake1',
//         "name": "Nome",
//       }
//     }, {
//       "points_count": 0,
//       "person": {
//         "id": 'fake2',
//         "name": "Nome",
//       }
//     },
//   ]

// const action = {type: 'SCORE_POINT', payload: {id: 'fake1'}}

// console.log(rankingsReducer(state, action))
// console.log(endState)
