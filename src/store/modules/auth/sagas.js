import { takeLatest, call, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";

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
            toast.error("Usuário não é prestador de serviço");
            return;
        }

        api.defaults.headers.Authorization = `Bearer ${token}`;

        yield put(signInSuccess(token, user));

        history.push("/dashboard");
    } catch (err) {
        toast.error("Usuário ou senha estão incorretos");
        yield put(signFalure());
    }
}

export function* signUp({ payload }) {
    try {
        const { email, name, password } = payload;

        yield call(api.post, "users", {
            name,
            email,
            password,
            provider: true
        });

        toast.success("Cadastrado com sucesso");

        history.push("/");
    } catch (err) {
        toast.error("Falha no cadastro, verifique seus dados!");
        yield put(signFalure());
    }
}

export function setToken({ payload }) {
    if (!payload) return;

    const { token } = payload.auth;

    if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
    }
}

export default all([
    takeLatest("persist/REHYDRATE", setToken),
    takeLatest("@auth/SIGN_IN_REQUEST", signIn),
    takeLatest("@auth/SIGN_UP_REQUEST", signUp)
]);
