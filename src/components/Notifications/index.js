import React, { useState, useEffect } from "react";
import { MdNotifications } from "react-icons/md";
import { parseISO, formatDistance } from "date-fns";
import pt from "date-fns/locale/pt";

import api from "~/services/api";

import {
    Container,
    Badge,
    NotificationList,
    Scroll,
    Notification
} from "./styles";

export default function Notifications() {
    const [visible, setVisible] = useState(false);
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        async function loadingNotification() {
            const response = await api.get("notifications");

            const data = response.data.map(notification => ({
                ...notification,
                timeDistance: formatDistance(
                    parseISO(notification.createdAt),
                    new Date(),
                    { addSuffix: true, locale: pt }
                )
            }));

            setNotifications(data);
        }

        loadingNotification();
    }, []);

    function handleChangeVisible() {
        setVisible(!visible);
    }

    return (
        <Container>
            <Badge onClick={handleChangeVisible} hasUnread>
                <MdNotifications color="#7159c1" size={20} />
            </Badge>
            <NotificationList visible={visible}>
                <Scroll>
                    <Notification unread>
                        <p>Você possui um novo agendamento para amanhã</p>
                        <time>há 2 dias</time>
                        <button type="button">Marcar como lidar</button>
                    </Notification>
                    <Notification>
                        <p>Você possui um novo agendamento para amanhã</p>
                        <time>há 2 dias</time>
                        <button type="button">Marcar como lidar</button>
                    </Notification>
                    <Notification>
                        <p>Você possui um novo agendamento para amanhã</p>
                        <time>há 2 dias</time>
                        <button type="button">Marcar como lidar</button>
                    </Notification>
                    <Notification>
                        <p>Você possui um novo agendamento para amanhã</p>
                        <time>há 2 dias</time>
                        <button type="button">Marcar como lidar</button>
                    </Notification>
                    <Notification>
                        <p>Você possui um novo agendamento para amanhã</p>
                        <time>há 2 dias</time>
                        <button type="button">Marcar como lidar</button>
                    </Notification>
                    <Notification>
                        <p>Você possui um novo agendamento para amanhã</p>
                        <time>há 2 dias</time>
                        <button type="button">Marcar como lidar</button>
                    </Notification>
                    <Notification>
                        <p>Você possui um novo agendamento para amanhã</p>
                        <time>há 2 dias</time>
                        <button type="button">Marcar como lidar</button>
                    </Notification>
                    <Notification>
                        <p>Você possui um novo agendamento para amanhã</p>
                        <time>há 2 dias</time>
                        <button type="button">Marcar como lidar</button>
                    </Notification>
                </Scroll>
            </NotificationList>
        </Container>
    );
}
