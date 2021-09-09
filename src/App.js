import React from "react";
import ImgWave from "./assets/images/wave.png";
import ImgUser from "./assets/images/user.svg";
import ImgB from "./assets/images/personalization.svg";
import {
  Wave,
  Container,
  Img,
  ImgBg,
  LoginContent,
  Form,
  ImgAvatar,
  Title,
  InputOne,
  Icon,
  Icon1,
  D,
  Input,
  InputPass,
  Icon2,
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
        <LoginContent>
          <Form>
            <ImgAvatar src={ImgUser} alt="" />
            <Title>welcome</Title>
            <InputOne>
              <Icon>
                <Icon1 />
              </Icon>
              <D>
                <h5>Username</h5>
                <Input type="text" />
              </D>
            </InputOne>
            <InputPass>
              <Icon>
                <Icon2 />
              </Icon>
              <D>
                <h5>Username</h5>
                <Input type="password" />
              </D>
            </InputPass>
            <A href="/">Forgot Password?</A>
            <Button type="submit" value="Login" />
          </Form>
        </LoginContent>
      </Container>
    </MainContainer>
  );
};

export default App;
