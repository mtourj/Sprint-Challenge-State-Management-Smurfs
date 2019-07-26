import * as actions from '../actions';

const initialState = {
  smurfs: [],
  gettingSmurfs: false,
  getSmurfsError: '',
  postingSmurf: false,
  postSmurfError: '',
  deleting: -1
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.GET_SMURFS_START : {
      return {
        ...state,
        gettingSmurfs: true,
        getSmurfsError: ''
      }
    }
    case actions.GET_SMURFS_SUCCESS : {
      return {
        ...state,
        gettingSmurfs: false,
        smurfs: action.payload
      }
    }
    case actions.GET_SMURFS_FAILURE : {
      return {
        ...state,
        gettingSmurfs: false,
        getSmurfsError: action.payload
      }
    }
    case actions.POST_SMURF_START : {
      return {
        ...state,
        postingSmurf: true,
        postSmurfError: ''
      }
    }
    case actions.POST_SMURF_SUCCESS : {
      return {
        ...state,
        postingSmurf: false,
      }
    }
    case actions.POST_SMURF_FAILURE : {
      return {
        ...state,
        postingSmurf: false,
        postSmurfError: action.payload
      }
    }
    case actions.DELETE_SMURF_START : {
      return {
        ...state,
        deleting: action.payload
      }
    }
    case actions.DELETE_SMURF_SUCCESS : {
      return {
        ...state,
        deleting: -1,
        smurfs: action.payload
      }
    }
    case actions.DELETE_SMURF_FAILURE : {
      return {
        ...state,
        deleting: -1
      }
    }
    default : {
      return state;
    }
  }
}

export default reducer;