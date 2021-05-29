import styled from 'styled-components';
//import Gesture from './Gesture';
import Pages4 from './Pages4';

function App() {
  return (
    <Container key={0}>
      <Pages4 key={1}/>
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
