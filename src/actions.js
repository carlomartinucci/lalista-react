import localforage from 'localforage';

import ENDPOINT from './endpoint';

export const update = (what, api) => async (dispatch) => {
  let localJson;
  let response;
  let json;

  try {
    localJson = await localforage.getItem(what.toLowerCase());
  } catch (e) {
    dispatch({ type: 'LOCALFORAGE_FAILED' });
  }

  if (localJson) {
    dispatch({ type: `UPDATE_${what.toUpperCase()}`, payload: localJson });
  }

  try {
    response = await fetch(`${ENDPOINT}${api}`);
    json = await response.json();
  } catch (e) {
    dispatch({ type: 'FETCH_FAILED' });
    return;
  }

  try {
    localforage.setItem(what.toLowerCase(), json);
  } catch (e) {
    dispatch({ type: 'LOCALFORAGE_FAILED' });
  }

  dispatch({ type: `UPDATE_${what.toUpperCase()}`, payload: json });
};

export const updateAll = () => (dispatch) => {
  dispatch(update('ranking', '/people/ranking'));
  dispatch(update('people', '/people'));
  dispatch(update('words', '/words'));
};

export const scorePoint = (person, word) => async (dispatch) => {
  dispatch({ type: 'SCORE_POINT', payload: { person, word } });

  let response;
  try {
    response = await fetch(`${ENDPOINT}/points`, {
      body: JSON.stringify({ person_id: person.id, word_id: word.id }),
      method: 'POST',
      headers: { 'content-type': 'application/json' },
    });
  } catch (e) {}

  if (!response || !response.ok) {
    dispatch({ type: 'FETCH_FAILED' });
    dispatch({ type: 'ROLLBACK_SCORE_POINT', payload: { person, word } });
  }
};

  // handleClick = () => {
  //   if (!this.state.person || !this.state.word) return
  //   const personId = this.state.person.id
  //   this.props.addPoint(personId)
  //   this.props.snackbarMessage(`segnando...`);

  //   this.setState({
  //     person: null,
  //     word: null,
  //   })

  //     .then(response => {
  //       console.log(response)
  //       if (!response.ok) {
  //         this.props.removePoint(personId)
  //         console.log("ERRORE!")
  //         this.props.snackbarMessage(`errore, riprova`);
  //       return
  //       }
  //       response.json()
  //     })
  //     .then((json) => {
  //       console.log(json)
  //       this.props.snackbarMessage(`segnato`);
  //     })
  //     .catch(what => {
  //       this.props.removePoint(personId)
  //       this.props.snackbarMessage(`errore, riprova`);
  //       console.log('what', what)
  //     });
  // }
