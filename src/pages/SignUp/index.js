import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";

import { signUpRequest } from "~/store/modules/auth/actions";

import logo from "~/assets/logo.svg";

// import { Container } from './styles';

export default function SignUp() {
    const dispatch = useDispatch();

    const schema = Yup.object().shape({
        name: Yup.string().required("O nome é obrigatorio"),
        email: Yup.string()
            .email("Insira um e-mail válido")
            .required("O e-mail é obrigatório"),
        password: Yup.string().required("A senha é obrigatória")
    });

    function handleSubmit({ name, email, password }) {
        dispatch(signUpRequest(name, email, password));
    }

    return (
        <>
            <img src={logo} alt="GoBarber" />

            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="name" placeholder="Nome completo" />
                <Input
                    name="email"
                    type="text"
                    placeholder="Insira seu email"
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="Insira sua senha"
                />
                <button type="submit">Cadastrar</button>
                <Link to="/">Já tenho conta</Link>
            </Form>
        </>
    );
}
