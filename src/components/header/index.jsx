import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../img/logo.jpg"
import {Button} from "../button/index"
import {BuscarInputContainer, Column, Container, Input, Menu, MenuRight, Row, UserPicture, Wrapper} from './style'
import Usuario from "./../../img/user.jpg"

const Header = ({autenticado}) => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }

    const handleClickHome = () => {
        navigate('/')
    }

    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo da DIO"/>
                    {autenticado ? (
                        <>
                            <BuscarInputContainer>
                                <Input placeholder='Buscar...'/>
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null}
                </Row>
                <Row>
                    {autenticado ? (
                        <>
                            <UserPicture src={Usuario}/>
                        </>
                    ) : (
                        <>
                            <MenuRight onClick={handleClickHome}>Home</MenuRight>
                            <Button title="Cadastrar"/>
                            <Button title="Entrar" onClick={handleClickSignIn}/>
                        </>
                    )}
                </Row>

            </Container>
        </Wrapper>
    )
}

export {Header}