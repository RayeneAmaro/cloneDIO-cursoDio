import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/header';
import {Button} from '../../components/button';
import {Container, Imagem, TextContent, Title, TitleHiglight} from "./style"
import Banner from '../../img/banner.jpg'

const Home = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }

    return (
        <>  
            <Header/>
            <Container>
                <div>
                    <Title> 
                        <TitleHiglight>Implemente <br/></TitleHiglight>
                        o seu futuro global agora!
                    </Title>
                    <TextContent>
                        Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
                        desafio profissional, evoluindo em comunidade com os melhores experts.
                    </TextContent>
                    <Button title="Começar agora" variant="secondary" onClick={handleClickSignIn}/>
                </div>
                <div>
                    <Imagem src={Banner} alt=''/>
                </div>
            </Container>

            
        </>
    )
}

export {Home}