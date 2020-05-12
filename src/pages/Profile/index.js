import React from "react";
import { Input, Form } from "@rocketseat/unform";
import { useSelector, useDispatch } from "react-redux";

import { Content } from "./styles";
import { updateProfileRequest } from "~/store/modules/user/actions";

export default function Profile() {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.user.profile);

    function handleSubmit(data) {
        console.log(data);
        dispatch(updateProfileRequest(data));
    }
    return (
        <Content>
            <Form initialData={profile} onSubmit={handleSubmit}>
                <Input type="text" name="name" placeholder="Digite seu nome" />
                <Input
                    type="text"
                    name="email"
                    placeholder="Digite seu email"
                />
                <hr />

                <Input
                    type="password"
                    name="oldPassword"
                    placeholder="Digite sua senha atual"
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Digite sua nova senha"
                />
                <Input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirme sua senha"
                />
                <button type="submit">Atualizar perfil</button>
            </Form>

            <button type="button">Sair do Gobarber</button>
        </Content>
    );
}
