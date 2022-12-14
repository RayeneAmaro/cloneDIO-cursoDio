import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Column, Container, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper} from "./style"
import {Button} from './../../components/button'
import {Input} from './../../components/input'
import {MdEmail, MdLock} from 'react-icons/md'
import { Header } from '../../components/header';

const Login = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/feed')
    }

    return (
        <>  
            <Header/>
            <Container>
                <Column>
                    <Title> 
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais
                        rápido nas empresas desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
                        <form>
                            <Input placeholder="E-mail" leftIcon={<MdEmail/>}/>
                            <Input placeholder="Senha" leftIcon={<MdLock/>}/>
                            <Button title="Entrar" variant='secondary' onClick={handleClickSignIn} type="button"/>
                        </form>
                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <CriarText>Criar conta</CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>

            
        </>
    )
}

export {Login}