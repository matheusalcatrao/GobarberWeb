import React from "react";
import { Link } from "react-router-dom";

import Notificatoin from "~/components/Notifications";

import logo from "~/assets/logo-purple.svg";
import { Container, Content, Profile } from "./styles";

export default function header() {
    return (
        <Container>
            <Content>
                <nav>
                    <img src={logo} alt="GoBarber" />
                    <Link to="/dashboard">DSHUDHAS</Link>
                </nav>

                <aside>
                    <Notificatoin />
                    <Profile>
                        <div>
                            <strong>Matheus Cépil</strong>
                            <Link to="/profile">Meu Perfil</Link>
                        </div>
                        <img
                            src="https://api.adorable.io/avatars/50/abott@adorable.png"
                            alt="Matheus Ceṕil"
                        />
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}
