import {_getNotes} from './actions'


const data = {
    notes: []
}

const reducer = (state=data, action) => {
    switch (action.type) {
        case _getNotes:
            return {
                ...state,
                notes: [
                    ...action.payload
                ]
            }

        default:
            return {
                ...state
            }
    }
}

export default reducer
