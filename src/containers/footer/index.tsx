import CreditCard from "../../assets/img/bandeiras-credito.png";
import DebitCard from "../../assets/img/bandeiras-debito.png";
import Vtex from "../../assets/img/vtex.png";
import Tdzain from "../../assets/img/tdzain.png";
import Phone from "../../assets/svg/phone.svg";
import Whatsapp from "../../assets/svg/whatsapp.svg";
import Email from "../../assets/svg/email.svg";

import {
  Address,
  CardImage,
  Cards,
  ContactSubTitle,
  Container,
  Copyright,
  CopyrightText,
  FooterImg,
  Logos,
  Section,
  SectionInfo,
  SectionTitle,
  SubTitle,
  SubTitleInfo,
} from "./styles";

const Footer = () => {
  return (
    <>
      <Container>
        <Section>
          <SectionTitle>INSTITUCIONAIS</SectionTitle>
          <SubTitle>Sobre a EWG</SubTitle>
          <SubTitle>Segurança</SubTitle>
          <SubTitle>Trocas e Devoluções</SubTitle>
          <SubTitle>Depoimentos</SubTitle>
        </Section>
        <Section>
          <SectionTitle>ATENDIMENTO</SectionTitle>
          <SubTitle>Fale Conosco</SubTitle>
          <SubTitle>Dúvidas Frequentes</SubTitle>

          <SectionTitle>CONTATO</SectionTitle>
          <ContactSubTitle><Email width={25}/>E-mail: contato@ewg.com.br</ContactSubTitle>
          <ContactSubTitle>
            <Whatsapp width={23} />
            Whatsapp: (41) 99677-2417
          </ContactSubTitle>
          <ContactSubTitle>
            <Phone width={25} />
            Televendas: (41) 3018-6575 <br /> (41) 3093-6275
          </ContactSubTitle>
        </Section>
        <SectionInfo>
          <SectionTitle>HORÁRIOS</SectionTitle>
          <SubTitleInfo>Atendimento Lojas Física:</SubTitleInfo>
          <SubTitleInfo>
            Segunda à Sexta-Feira das 8h30 às 18h00. Sábado das 8:30 às 13:00 |
            Exceto Feriados
          </SubTitleInfo>
          <SectionTitle>Atendimento Loja Virtual:</SectionTitle>
          <SubTitleInfo>
            Segunda à Sexta-Feira das 9h00 às 18h00 | Exceto Feriados.
          </SubTitleInfo>
          <Address>Av. Presidente Arthur da Silva Bernardes, 391</Address>
          <SectionTitle>FORMAS DE PAGAMENTO</SectionTitle>
          <Cards>
            <CardImage src={CreditCard} />
            <CardImage src={DebitCard} />
          </Cards>
        </SectionInfo>
      </Container>
      <Copyright>
        <CopyrightText>
          Copyright EWG® - Todos os direitos reservados. EWG - Comércio de
          Materiais Elétricos e Hidráulicos LTDA - 82.436.007/0001-15 Preços e
          condições de pagamento válidos exclusivamente para compras efetuadas
          no site, não valendo necessariamente para a rede de lojas físicas. As
          imagens dos produtos são meramente ilustrativas. Todos os preços e
          condições comerciais estão sujeitos a alteração sem prévio aviso.
        </CopyrightText>
        <Logos>
          <FooterImg src={Vtex} />
          <FooterImg src={Tdzain} height={20} />
        </Logos>
      </Copyright>
    </>
  );
};

export default Footer;
