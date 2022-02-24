import Button from './Joke';
import { ContextProvider } from './JokeContext';

function App() {
  return (
    <div>
      <ContextProvider>
      <Button/>
      </ContextProvider>
    </div>
  );
}

export default App;
