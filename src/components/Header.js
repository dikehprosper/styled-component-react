import { StyledHeader, Image, Logo, Nav } from "./styles/Header.styled";
import { Container } from "./styles/Component.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";


export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="" />
          <Button>Try It Free</Button>
        </Nav>

        <Flex>
          <div>
            <h1>Build the community your fans would love</h1>

            <p>
              {" "}
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion{" "}
            </p>

            <Button bg="#ff0099" color="#fff">
              Get Started For Free
            </Button>
          </div>

          <Image src="./images/illustration-mockups.svg" alt="" />
        </Flex>
      </Container>
    </StyledHeader>
  );
}
