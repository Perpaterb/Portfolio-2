import styled from 'styled-components';
import Gesture from './Gesture';
import Pages3 from './Pages3';

function App() {
  return (
    <Container>
        <Pages3/>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 0px;
  min-height: 100vh;
`;

// const Rect = styled.div`
//   width: 200px;
//   height: 200px;
//   background: red;
// `;
