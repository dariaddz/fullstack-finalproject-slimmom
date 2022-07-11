
import styled from 'styled-components';



import RegistrationForm from './RegistrationForm';

const RegistrationPage = () => (
    <Wrapper>
      <ContainerBackground>
        <RegistrationForm />
      </ContainerBackground>
      </Wrapper>
);

const Wrapper = styled.main`
  overflow-x: hidden;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 60px);
  `;

  const ContainerRegister = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  `;

  const ContainerBackground = styled(ContainerRegister)`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  `;

export default RegistrationPage;