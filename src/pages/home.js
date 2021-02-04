import React from 'react';
import { Feature, OptForm } from '../components';
import { FooterContainer } from "../containers/footer";
import { FaqsContainer } from '../containers/faqs';
import { JumbotronContainer } from "../containers/jumbotron";
import{ HeaderContainer } from '../containers/header';

export default function Home() {
    return (
        <>
        <HeaderContainer>
         <Feature>
             <Feature.Title>Unlimited films, TV programmes, and move.</Feature.Title>
             <Feature.SubTitle>Watch anywhere. Cancel at asny time. </Feature.SubTitle>
        
         <OptForm>
                <OptForm.Input placeholder="Email address" />
                <OptForm.Button> Try it Now</OptForm.Button> 
                <OptForm.Break />
                <OptForm.Text>
                Ready to watch? Enter your email to create or restart your member 
                </OptForm.Text>

            </OptForm>
            </Feature>
        </HeaderContainer>
        <JumbotronContainer />
        <FaqsContainer />
        <FooterContainer />
       
        </>
    );
}


