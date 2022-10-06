// import { Currencies } from "./Currencies";
import { Currencies } from "./Currencies";
import { Header } from "./Header";

function App() {
  return (
    <>
      <Header />
      <section className="wrapper" id="section">
        <div className="section__div">
          <Currencies />
        </div>
      </section>
    </>
  );
}

export default App;
