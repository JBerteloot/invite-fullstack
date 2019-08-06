const initialState = {
  users: [],
  going: [],
  notGoing: []
}


export default function(state = initialState, action) {
  switch (action.type) {

    case "GENERATE" :
      return {...state, users: action.payload}

      case "GET_GOING" :
        return {...state, going: action.payload}

    case 'GET_NOTGOING':
      return {...state, notGoing: action.payload}

    default:
      return state
  }


 
}