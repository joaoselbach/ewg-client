import {
  Container,
  ItemList,
  ItemsMenu,
  ItemSubList,
  ItemSubListContainer,
  ItemSubListTitle,
  ProductImg,
  Products,
} from "./styles";

const ItemsHeader = () => {
  return (
    <Container>
      <ItemsMenu>
        <ItemList>
          <a>Metais</a>
          <ItemSubList>
            <ItemSubListContainer>
              <Products>
                <ItemSubListTitle>Product</ItemSubListTitle>
                <ItemSubListTitle>Product</ItemSubListTitle>
                <ItemSubListTitle>Product</ItemSubListTitle>
                <ItemSubListTitle>Product</ItemSubListTitle>
              </Products>
              <ProductImg>
                <img
                  src="https://lojaewg.vteximg.com.br/arquivos/ids/159285/1126_posts_metais.jpg?v=637420150654470000"
                  alt="Metais"
                />
              </ProductImg>
            </ItemSubListContainer>
          </ItemSubList>
        </ItemList>

        <ItemList>
          <a>Pressurizadores e Bomba</a>
          <ItemSubList>
            <ItemSubListContainer>
              <Products>
                <ItemSubListTitle>Product</ItemSubListTitle>
                <ItemSubListTitle>Product</ItemSubListTitle>
                <ItemSubListTitle>Product</ItemSubListTitle>
                <ItemSubListTitle>Product</ItemSubListTitle>
              </Products>
              <ProductImg>
                <img
                  src="https://lojaewg.vteximg.com.br/arquivos/ids/159289/1126_posts_pressurizadores.jpg?v=637420158979330000"
                  alt="Chuveiro"
                />
              </ProductImg>
            </ItemSubListContainer>
          </ItemSubList>
        </ItemList>

        <ItemList>
          <a>Aquecedores</a>
          <ItemSubList>
            <ItemSubListContainer>
              <Products>
                <ItemSubListTitle>Product</ItemSubListTitle>
                <ItemSubListTitle>Product</ItemSubListTitle>
                <ItemSubListTitle>Product</ItemSubListTitle>
                <ItemSubListTitle>Product</ItemSubListTitle>
              </Products>
              <ProductImg>
                <img
                  src="https://lojaewg.vteximg.com.br/arquivos/ids/159282/1126_posts_aquecedores.jpg?v=637420150647200000"
                  alt="Aquecedores"
                />
              </ProductImg>
            </ItemSubListContainer>
          </ItemSubList>
        </ItemList>
      </ItemsMenu>
    </Container>
  );
};

export default ItemsHeader;
