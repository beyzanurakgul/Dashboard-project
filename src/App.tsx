// App.tsx
import React from 'react';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import { QueryClient, QueryClientProvider } from 'react-query'; // QueryClient ve QueryClientProvider'ı içe aktar

const queryClient = new QueryClient(); // QueryClient örneğini oluştur

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}> {/* QueryClientProvider bileşenini kullanarak QueryClient örneğini sağla */}
      <Layout>
        <Dashboard />
      </Layout>
    </QueryClientProvider>
  );
};

export default App;
