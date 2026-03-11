import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./page/Home";

function App() {
  return (
    <div className="min-h-screen flex flex-col w-full max-w-[100vw] overflow-x-hidden">
      <Navbar />
      <main className="flex-1 w-full min-w-0">
        <Home />
      </main>
      <Footer />
    </div>
  );
}
export default App;