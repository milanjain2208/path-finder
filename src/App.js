import { Grid } from './Grid';

function App() {
  const appStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"
  };
  return (
    <div style={appStyle}>
      <Grid/>
    </div>
  )
}

export default App;
