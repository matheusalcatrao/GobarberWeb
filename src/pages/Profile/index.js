import React from "react";
import { Input, Form } from "@rocketseat/unform";
import { useSelector } from "react-redux";

import { Content } from "./styles";

export default function Profile() {
    const profile = useSelector(state => state.user.profile);

    function handleSubmit(data) {
        console.log(data);
    }
    return (
        <Content>
            <Form initialData={profile} onClick={handleSubmit}>
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
