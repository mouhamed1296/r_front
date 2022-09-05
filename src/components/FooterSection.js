import React from 'react';
import styled from 'styled-components';

const FooterSection = () => {
  return (
    <Wrapper>
        <TextContent>
            <p><img src='/images/logoFooter.png' alt='logoFooter'/></p>
            <div>
                <p>Abonnez-vous à notre NewsLetters<br/>pour ne pas rater les offres exceptionnelles</p>
                <label>
                    <input type="text" placeholder='Entrez votre email' />
                </label>
                <button>Envoyer</button>
            </div>
            <section>
                <h5>flashExpress</h5>
                <h6>est disponible en application mobile<br/>Téléchargez gratuitement sur</h6>
                <article>
                    <img src='/images/appStore.png' alt='appStore'/>
                    <p>Download on the<br/>AppleStore</p>
                </article>
                <article className='two'>
                <img src='/images/googlePlay.png' alt='googlePlay'/>
                <p>GET IT ON<br/>PlayStore</p>
            </article>
            </section>
        </TextContent>
        <ContentSocial>
            <div className='navigation'>
                <h6>Navigation</h6>
                <ul>
                    <li>
                        <a href='/'>Accueil</a>
                    </li>
                    <li>
                        <a href='/Nos Services'>Nos Services</a>
                    </li>
                    <li>
                        <a href='/A propos'>A propos</a>
                    </li>
                    <li>
                        <a href='/Contact'>Contact</a>
                    </li>
                </ul>    
            </div>
            <div className='support'>
                <h6>Support</h6>
                <ul>
                    <li>
                        <a href='/'>@flashExpress@support.com</a>
                    </li>
                    <li>
                        <a href='/'>Telephone: +(221)77 456 89 70</a>
                    </li>
                    <li>
                        <a href='/'>Fixe: +(221)33 333 55 66</a>
                    </li>
                    <li>
                        <a href='/'>Localisation: PG5J+V8J, Voie de degagement N, Dakar</a>
                    </li>
                </ul>
            </div>
            <div className='contact'>
                <h6>Retrouvez-nous sur</h6>
                <p className='para1'>
                    <img src='/images/Twitter.png' alt='Twitter'/>
                    <p>@flashExpress</p>
                </p>
                <p className='para2'>
                    <img src='/images/Facebook.png' alt='Facebook'/>
                    <p>flashExpress_lofficiel</p>
                </p>
                <p className='para3'>
                    <img src='/images/Instagram.png' alt='Instagram'/>
                    <p>flashExpress_lofficiel</p>
                </p>
                <p className='para4'>
                    <img src='/images/LinkedIn.png' alt='LinkedIn'/>
                    <p>flashExpress_lofficiel</p>
                </p>
            </div>
        </ContentSocial>
        <Note>
            <p>Copyrigth © 2022 - flashExpress. Tous droits réservés.</p>
        </Note>
    </Wrapper>
  );
}

const Wrapper = styled.div`
width: 1905px;
height: 645px;
background: #EFF1F5;`;

const TextContent = styled.div`
    p img {
        width: 211px;
        height: 141px;
        margin-left: 252px;
        margin-top: 80px;
    }
    
    div {
        width: 501px;
        height: 108px;
        margin-left: 583px;
        margin-top: -130px;
    }
    
    div p {
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 18px;
        color: #292D31;
        width: 413px;
        height: 36px;
    }
    
    div input {
        width: 352px;
        height: 51.87px;
        background: #FFFFFF;
        border-radius: 14px;
        border: 1px solid #EFF1F5;
        color: #D9D9D9;
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        text-align: center;
    }

    div button {
        width: 127px;
        height: 54px;
        margin-left: 22px;
        background: #F2A401;
        border-radius: 14px;
        border: 1px solid #F2A401;
        font-family: 'Epilogue';
        color: #FFFFFF;
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 18px;
    }

    section {
        width: 411px;
        height: 91px;
        margin-left: 1187px;
        margin-top: -100px;
    }

    section h5 {
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 14px;
        color: #F2A401;
    }

    section h6 {
        // height: 14px;
        width: 360px;
        margin-left: 140px;
        margin-top: -40px;
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 14px;
        color: #292D31;
    }

    section article {
        margin-left: 140px;
        margin-top: 20px;
        widht: 113px;
        height: 54px;
        border: 2px solid #000000;
        border-radius: 11px;
        width: 113.52px;
        height: 54px;
    }

    section article img {
        margin-left: 7px;
    }
    
    section article p {
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 400;
        font-size: 8px;
        line-height: 8px;
        color: #000000;
        margin-left: 30px;
    }

    section article.two {
        margin-left: 280px;
        margin-top: -53px;
    }
`;

const ContentSocial = styled.div`
    div.navigation {
        width: 115px;
        height: 150px;
        margin-left: 350px;
        margin-top: 130px;
    }
    
    div.navigation h6 {
        width: 109px;
        height: 21px;
        margin-left: 20px;
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 20px;
        color: #000000;
    }
    
    div.navigation ul {
        width: 165px;
        height: 16px;
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 16px;
        color: #292D31;
        margin-left: -12px;
        list-style: none;
    }
    
    div.navigation ul li {
        padding: 3px;
        margin-top: 6px;
    }
    
    div.navigation ul li a {
        text-decoration: none;
        color: #292D31;
    }
    
    div.support {
        width: 380px;
        height: 159px;
        margin-left: 730px;
        margin-top: -150px;
    }
    
    div.support h6 {
        width: 84px;
        height: 21px;
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 20px;
        color: #000000;
    }
    
    div.support ul {
        width: 464px;
        height: 16px;
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 16px;
        color: #292D31;
        list-style: none;
        margin-left: -32px;
    }
    
    div.support ul li {
        padding: 3px;
        margin-top: 6px;
    }
    
    div.support ul li a {
        text-decoration: none;
        color: #292D31;
    }

    div.contact {
        width: 221px;
        height: 162.43px;
        margin-left: 1349px;
        margin-top: -160px;
    }

    div.contact h6 {
        width: 221px;
        height: 20.74px;
        margin-left: -14px;
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 20px;
        color: #000000;
        margin-top: -20px;
    }

    div.contact img {
        width: 30.67px;
        height: 27.65px;
        margin-left: -24px;
        margin-top: 20px;
        cursor: pointer;
    }

    div.contact p {
        width: 98px;
        height: 46px;
        margin-left: 18px;
        margin-top: -25px;
        color: #292D31;
    }

`;

const Note = styled.div`
    width: 561px;
    height: 32px;
    margin-left: 739px;
    margin-top: 100px;
    
    p {
        font-family: 'Epilogue';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 20px;
        color: #000000;
    }
`;

export default FooterSection;
