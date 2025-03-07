import { Footer } from '@/components/Footer';
import { FormUrl } from '@/components/FormUrl';
import { Header } from '@/components/Header';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between h-screen bg-primary">
      <Header />
      <FormUrl />
      <Footer />
    </div>
  );
}
