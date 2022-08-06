import Navbar from './components/Navbar/Navbar';
import Feed from './components/Feed';

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <Feed />
    </div>
  );
}
