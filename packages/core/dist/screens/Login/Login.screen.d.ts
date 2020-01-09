import React from 'react';
export declare class Login extends React.Component<any, any> {
    constructor(props: any, context: any);
    onPressLogin: () => Promise<void>;
    onChangeTextLogin: (login: any) => void;
    onChangeTextPassword: (password: any) => void;
    loginSuccess: () => void;
    loginFailed: () => void;
    render(): JSX.Element;
}
