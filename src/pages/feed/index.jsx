import React from 'react';
import {Container, Column, Title, TitleHiglight} from "./style"
import {Header} from './../../components/header'
import { Card } from '../../components/card';
import { UserInfo } from '../../components/userInfo';
import Usuario from './../../img/user.jpg'

const Feed = () => {
    return (
        <>  
            <Header autenticado={true}/>
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </Column>
                <Column flex={1}>
                    <TitleHiglight># RANKING 5 TOP DA SEMANA</TitleHiglight>
                    <UserInfo percentual={80} nome="Rayene" image={Usuario}/>
                    <UserInfo percentual={35} nome="Rayene" image={Usuario}/>
                    <UserInfo percentual={43} nome="Rayene" image={Usuario}/>
                    <UserInfo percentual={91} nome="Rayene" image={Usuario}/>
                    <UserInfo percentual={55} nome="Rayene" image={Usuario}/>
                    <UserInfo percentual={15} nome="Rayene" image={Usuario}/>
                </Column>
            </Container>

            
        </>
    )
}

export {Feed}