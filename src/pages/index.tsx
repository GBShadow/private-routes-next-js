import { useCallback, useContext, useState } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../providers/authProvider';

import * as S from '../styles/Login';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { authUser, authenticated } = useContext(AuthContext);

  const handleLogin = useCallback(() => {
    authUser();
  }, [authUser]);

  console.log(authenticated);

  return (
    <S.Container>
      <S.LoginContainer>
        <h1>Login</h1>
        <h3>E-mail</h3>
        <S.Input name="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
        <h3>Password</h3>
        <S.Input name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <S.ButtonLogin onClick={handleLogin}>Entrar</S.ButtonLogin>
      </S.LoginContainer>
    </S.Container>
  );
}
