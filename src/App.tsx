import Header from './components/Header';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Comments from  './components/Comments';
import Banner from './components/Banner';

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Header />
      <Projects />
      <Comments />
    </div>
  );
}

export default App;
