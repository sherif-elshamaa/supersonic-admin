
import { IS_AUTHORISED } from '../Constants/action-types'
import { SIGNOUT } from '../Constants/action-types'
import { POST_TOAST } from '../Constants/action-types'
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

export const authorization = (object) => {
    return {
        type: IS_AUTHORISED,
        payload: object,
    };
};
export const signout = (object) => {
    return {
        type: SIGNOUT,
        payload: object,
    }
}
export const getsubscribers = (object) => {
    return {
        type: GET_SUBSCRIBERS,
        payload: object,
    }
}
export const getsubscribersdata = (object) => {
    return {
        type: GET_SUBSCRIBERS_DATA,
        payload: object
    }
}
export const getsubscriptions = (object) => {
    return {
        type: GET_SUBSCRIPTIONS,
        payload: object
    }
}
export const getcontactus = (object) => {
    return {
        type: GET_CONTACT_US,
        payload: object
    }
}
export const gettickests = (object) => {
    return {
        type: GET_TICKETS,
        payload: object
    }
}
export const getinvoice = (object) => {
    return {
        type: GET_INVOICE,
        payload: object
    }
}
export const getplans = (object) => {
    return {
        type: GET_PLANS,
        payload: object
    }
}
export const editplans = (object) => {
    return {
        type: EDIT_PLANS,
        payload: object
    }
}
export const closeticket = (object) => {
    return {
        type: CLOSE_TICKET,
        payload: object
    }
}
export const sendemail = (object) => {
    return {
        type: SEND_EMAIL,
        payload: object
    }
}
export const delaccount = (object) => {
    return {
        type: DEL_ACCOUNT,
        payload: object
    }
}
export const posttoast = (object) => {
    return {
        type: POST_TOAST,
        payload: object
    }
}