import { IS_AUTHORISED } from "../Constants/action-types";
import { SIGNOUT } from "../Constants/action-types";
import { POST_TOAST } from "../Constants/action-types";
import {
  GET_SUBSCRIBERS,
  GET_SUBSCRIBERS_DATA,
  GET_SUBSCRIPTIONS,
  GET_CONTACT_US,
  GET_TICKETS,
  GET_INVOICE,
  GET_PLANS,
  EDIT_PLANS,
  CLOSE_TICKET,
  SEND_EMAIL,
  DEL_ACCOUNT
} from '../Constants/action-types'

const initialState = {
  status: {
    isauthorized: false,
    user: {},
  },
  toast: {
    state: "",
    text: "",
    show: false
  },
  subscribers: [],
  subscribersData: [],
  subscriptions: [],
  contactUs: [],
  ticket: [],
  invoice: [],
  plans: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case IS_AUTHORISED: {
      return {
        ...state,
        status: {
          isauthorized: action.payload.isauthorized,
          user: action.payload.user,
        }
      }
    }
    case SIGNOUT: {
      return {
        ...state,
        status: {
          isauthorized: action.payload.isauthorized,
          user: action.payload.user,
        }
      }
    }
    case POST_TOAST: {
      return {
        ...state,
        toast: {
          state: action.payload.toast.state,
          text: action.payload.toast.text,
          show: action.payload.toast.show
        }
      }
    }
    case GET_SUBSCRIBERS: {
      return {
        ...state,
        subscribers: action.payload
      }
    }
    case GET_SUBSCRIBERS_DATA: {
      return {
        ...state,
        subscribersData: action.payload
      }
    }
    case GET_SUBSCRIPTIONS: {
      return {
        ...state,
        subscriptions: action.payload
      }
    }
    case GET_CONTACT_US: {
      return {
        ...state,
        contactUs: action.payload
      }
    }
    case GET_TICKETS: {
      return {
        ...state,
        ticket: action.payload
      }
    }
    case GET_INVOICE: {
      return {
        ...state,
        invoice: action.payload
      }
    }
    case GET_PLANS: {
      return {
        ...state,
        plans: action.payload
      }
    }
    case EDIT_PLANS: {
      return {
        ...state,
        plans: state.plans.map((plan) => plan._id === action.payload._id ? action.payload : plan)
      }
    }
    case CLOSE_TICKET: {
      return {
        ...state,
        ticket: state.ticket.map((item) => item._id === action.payload._id ? action.payload : item)
      }
    }
    case SEND_EMAIL: {
      return {
        ...state,
        contactUs: state.contactUs.map((item) => item._id === action.payload._id ? action.payload : item)
      }
    }
    case DEL_ACCOUNT: {


      return {
        ...state,
        subscribers: state.subscribers.filter((item) => item._id !== action.payload),
        subscribersData: state.subscribersData.filter((item) => item.userId !== action.payload),
        subscriptions: state.subscriptions.filter((item) => item.userId !== action.payload),
        ticket: state.ticket.filter((item) => item.userId !== action.payload)
      }
    }
    default:
      return state;
  }
}

export default rootReducer;
