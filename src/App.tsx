import Navbar from './components/Navbar/Navbar';
import Feed from './components/Feed';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative min-h-screen flex flex-col">
        <Navbar />
        <Feed />
      </div>
    </QueryClientProvider>
  );
}
