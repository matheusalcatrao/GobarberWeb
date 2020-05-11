import styled from "styled-components";
import { darken } from "polished";

export const Content = styled.div`
    max-width: 600px;
    margin: 50px auto;

    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;

        input {
            background: rgba(0, 0, 0, 0.1);
            border: 0;
            border-radius: 4px;
            height: 44px;
            padding: 0 15px;
            color: #fff;
            margin: 0 0 10px;

            &::placeholder {
                color: rgba(225, 225, 225, 0.7);
            }
        }

        span {
            color: #e40c40;
            align-self: flex-start;
            margin: 0 0 10px;
            font-weight: bold;
        }

        button {
            margin: 5px 0 0;
            height: 44px;
            background: #3b9eff;
            font-weight: bold;
            color: #fff;
            border: 0;
            border-radius: 4px;
            font-size: 16px;

            &:hover {
                background: ${darken(0.03, "#3b9eff")};
            }
        }
    }

    > button {
        width: 100%;
        margin: 20px 0 0;
        height: 44px;
        background: #f64c75;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 16px;

        &:hover {
            background: ${darken(0.08, "#f64c75")};
        }
    }
`;
