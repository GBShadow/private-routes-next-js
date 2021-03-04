import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #ddd;
`;

export const LoginContainer = styled.div`
  width: 500px;
  height: 300px;

  display: flex;
  flex-direction: column;

  padding: 16px;
  border-radius: 8px;

  background: #fff;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.3);

  text-align: center;
  h1 {
    margin-bottom: 16px;
  }
`;

export const Input = styled.input`
  height: 32px;
  margin-bottom: 16px;
`;

export const ButtonLogin = styled.button`
  margin-top: 40px;
  height: 40px;
  font-size: 24px;
`;
