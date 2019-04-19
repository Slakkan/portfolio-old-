const defaultState = {
    projects: []
}

const formReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ('PROJECTS'):
        return {
            ...state,
            projects: action.projects
        }
        default:
            return state
    }
}

export default formReducer