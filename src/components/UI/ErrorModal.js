import React from 'react';
import ReactDOM from 'react-dom';
import Wrapper from '../Helpers/Wrapper';
import Button from './Button';
import Card from './Card';

import classes from './ErrorModal.module.css';

const Backdrop = (props) => {
    const { onConfirm } = props;

    return <div className={classes.backdrop} onClick={onConfirm} />;
};

const ModalOverlay = (props) => {
    const { title, message, onConfirm } = props;

    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h1>{title}</h1>
            </header>
            <div className={classes.content}>
                <p>{message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={onConfirm}>Okey</Button>
            </footer>
        </Card>
    );
};

const ErrorModal = (props) => {
    const { title, message, onConfirm } = props;
    return (
        <Wrapper>
            {ReactDOM.createPortal(<Backdrop onConfirm={onConfirm} />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(
                <ModalOverlay title={title} message={message} onConfirm={onConfirm} />,
                document.getElementById('overlay-root'),
            )}
        </Wrapper>
    );
};

export default ErrorModal;
