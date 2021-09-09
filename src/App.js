import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { ImUnlocked } from "react-icons/im";
import ImgWave from "./assets/images/wave.png";
import ImgUser from "./assets/images/user.svg";
import ImgB from "./assets/images/personalization.svg";
import {
  Wave,
  Container,
  Img,
  ImgBg,
  LoginContainer,
  Form,
  ImgAvatar,
  Title,
  InputOne,
  Icon,
  D,
  Input,
  InputPass,
  A,
  Button,
  MainContainer,
} from "./App.elements";

const App = () => {
  return (
    <MainContainer>
      <Wave src={ImgWave} alt="" />
      <Container>
        <Img>
          <ImgBg src={ImgB} alt="" />
        </Img>
        <LoginContainer>
          <Form>
            <ImgAvatar src={ImgUser} alt="" />
            <Title>welcome</Title>
            <InputOne>
              <Icon>
                <FaUserAlt style={{ color: "#d9d9d9" }} />
              </Icon>
              <D>
                <Input type="text" placeholder="password" />
              </D>
            </InputOne>
            <InputPass>
              <Icon>
                <ImUnlocked style={{ color: "#d9d9d9" }} />
              </Icon>
              <D>
                <Input type="password" placeholder="password" />
              </D>
            </InputPass>
            <A href="https://github.com/Breno44/Animated-Login">Forgot Password?</A>
            <Button type="submit" value="Login">
              Login
            </Button>
          </Form>
        </LoginContainer>
      </Container>
    </MainContainer>
  );
};

export default App;
