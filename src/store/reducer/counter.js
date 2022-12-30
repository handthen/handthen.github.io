export default function (state = { count: 0 }, action) {
    switch (action.type) {
        case "add":
            return { count: state.count + 1 }
        case "sub":
            return { count: state.count - 1 }
        default: return state;
    }
}