import { legacy_createStore } from "redux";

const reducer = () => {

}

const initialstate = {
    todo: []
}

export const store = legacy_createStore(reducer, initialstate)