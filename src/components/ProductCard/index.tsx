import {
  Container,
  ImgContainer,
  Installments,
  Price,
  ProductButton,
  ProductCard,
  ProductImage,
  ProductInfo,
  Title,
} from "./styles";

const Product = ({ ...propProduct }) => {
  return (
    <Container>
      <ProductCard>
        <ImgContainer>
          <ProductImage src={propProduct.imageUrl} />
          <Title>{propProduct.title}</Title>
        </ImgContainer>
        <ProductInfo>
          <Price>{propProduct.price}</Price>
          <Installments>{propProduct.installments}</Installments>
          <ProductButton>COMPRAR</ProductButton>
        </ProductInfo>
      </ProductCard>
    </Container>
  );
};

export default Product;
