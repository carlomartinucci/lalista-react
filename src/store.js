import { createStore } from 'redux';
const ADD_POINT = 'ADD_POINT';

const reducer = (state, action) => state;

// 1 user clicca segna
// 2 aggiorno ottimisticamente la ui
// 3 faccio il fetch in post per aggiornare
// 4 se la risposta è positiva, sono a posto
// 5 se la risposta è negativa, torno indietro e mostro un errore

const defaultState = [
      {
        "points_count": 0,
        "person": {
          "id": 'fake1',
          "name": "Nome",
        }
      }, {
        "points_count": 0,
        "person": {
          "id": 'fake2',
          "name": "Nome",
        }
      },
    ]
// questo è il punto 2
// state : [{points_count, person}]
// action: {type: 'ADD_POINT', payload: {id}}
const rankingsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_POINT:
      return state.map((rank) => {
        if (rank.person.id === action.payload.id) {
          return { ...rank, points_count: rank.points_count + 1 }
        }
        return rank;
      });
    case 'UPDATE_RANKINGS':
      return action.payload;
    default:
      return state;
  }
}

const store = createStore(rankingsReducer);

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

// const action = {type: 'ADD_POINT', payload: {id: 'fake1'}}

// console.log(rankingsReducer(state, action))
// console.log(endState)
