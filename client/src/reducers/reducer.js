const initialState = {
  new: {},
  going: [],
  notGoing: []
}


export default function(state = initialState, action) {
  switch (action.type) {

    case "GENERATE" :
      return {...state, new: action.payload}

      case "GET_GOING" :
        return {...state, going: action.payload}

    case 'GET_NOTGOING':
      return {...state, notGoing: action.payload}

    case "ADD_GOING" :
      console.log(action.payload)
      return {...state, new: {}, going: [...state.going, action.payload]}
  
    case "ADD_NOTGOING" :
      return {...state, new: {}, notGoing: [...state.notGoing, action.payload]}

    default:
      return state
  }


 
}