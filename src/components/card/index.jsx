import React from 'react';
import {CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture} from './style.js'
import {FiThumbsUp} from 'react-icons/fi'
import Usuario from './../../img/user.jpg'
import Fundo from './../../img/site.jpg'

const Card = () => {

    return (
        <CardContainer>
            <ImageBackground src={Fundo}/>
            <Content>
                <UserInfo>
                    <UserPicture src={Usuario}/>
                    <div>
                        <h4>Rayene</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de HTML e CSS</h4>
                    <p>Projeto feito o curso de html e css no bootcamp do Global avanade... <strong>Saiba mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #Javascript</h4>
                    <p>
                        <FiThumbsUp /> 10
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export {Card}