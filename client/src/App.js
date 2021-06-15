import {Container, Typography} from '@material-ui/core'
import Order from './components/order'
import './App.css';

function App() {
  return (
    <Container maxWidth="md">
      <Typography variant="h2" align="center">Restaurant App</Typography>
      <Order />
    </Container>
  );
}

export default App;
