import styled from "styled-components";

const In = styled.div`
  display: grid;
  grid-template-columns: 7% 93%;
  margin: 25px 0;
  padding: 5px 0;
  border-bottom: 2px solid #d9d9d9;
  width: 100%;
`;

export const Wave = styled.img`
  position: fixed;
  height: 100vh;
  left: 0;
  bottom: 0;
  z-index: -1;

  @media (min-width: 100px) and (max-width: 1250px) {
    display: none;
  }
`;

export const ImgBg = styled.img`
  width: 500px;

  @media (min-width: 100px) and (max-width: 1250px) {
    width: 0px;
  }
`;

export const ImgAvatar = styled.img`
  width: 100px;
`;

export const MainContainer = styled.div`
  font-family: "Poppins", sans-serif;
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 7rem;
  padding: 0 15rem;

  @media (min-width: 100px) and (max-width: 1250px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px;
    padding: 0px;
  }
`;

export const Img = styled.div`
  width: 500px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (min-width: 100px) and (max-width: 1250px) {
    display: none;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 100px) and (max-width: 500px) {
    width: 280px;
  }
`;

export const Title = styled.h2`
  font-size: 2.9rem;
  text-transform: uppercase;
  margin: 15px 0;
  color: #333;
`;

export const InputOne = styled(In)`
  margin-top: 0;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 0 5px 5px 0;
`;

export const D = styled.div`
  position: relative;
  height: 45px;
`;

export const Input = styled.input`
  position: absolute;
  top: 8px;
  left: 0;
  font-size: 1.2rem;
  color: #555;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  background: none;
  padding: 0.5rem 0.7rem;
  transition: all ease 0.3s;
`;

export const InputPass = styled(In)`
  margin-bottom: 4px;
`;

export const A = styled.a`
  display: block;
  text-align: right;
  text-decoration: none;
  color: #999;
  font-size: 0.9rem;
  transition: 0.3s;
  width: 100%;

  &:hover {
    color: #38d39f;
  }
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  height: 50px;
  border-radius: 25px;
  margin: 1rem 0;
  font-size: 1.2rem;
  outline: none;
  border: none;
  background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
  cursor: pointer;
  color: #ffffff;
  background-size: 200%;
  transition: 0.5s;

  &:hover {
    background-position: right;
  }
`;
