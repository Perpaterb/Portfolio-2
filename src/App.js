import styled from 'styled-components';
import Pages2 from './Pages2';
import Circle from './Circle';

function App() {
  return (
    <Container>
      <Pages2>
        <Rect/>
      </Pages2>
      <Pages2></Pages2>
      <Circle/>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 0px;
  min-height: 100vh;
`;

const Rect = styled.div`
  width: 200px;
  height: 200px;
  background: red;
`;
