import { Header } from "./Header";
import { Section } from "./Section";

function App() {
  return (
    <>
      <Header />
      <section className="wrapper" id="section">
        <div className="section__div">
          <Section />
        </div>
      </section>
    </>
  );
}

export default App;
