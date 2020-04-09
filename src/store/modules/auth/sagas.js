import { takeLatest, call, put, all } from "redux-saga/effects";

import history from "~/services/history";
import api from "~/services/api";

import { signInSuccess, signFalure } from "./actions";

export function* signIn({ payload }) {
    const { email, password } = payload;

    try {
        const response = yield call(api.post, "sessions", {
            email,
            password
        });

        const { token, user } = response.data;

        if (!user.provider) {
            console.tron.log("erro");
            return;
        }

        yield put(signInSuccess(token, user));

        history.push("/dashboard");
    } catch (err) {
        yield put(signFalure());
    }
}

export default all([takeLatest("@auth/SIGN_IN_REQUEST", signIn)]);
