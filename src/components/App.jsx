import { Currencies } from "./Currencies";
import { Header } from "./Header";

function App() {
  return (
    <>
      <Header />
      <section className="wrapper" id="section">
        <Currencies />
      </section>
    </>
  );
}

export default App;
