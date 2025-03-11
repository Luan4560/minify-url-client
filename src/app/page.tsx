import { Footer } from '@/components/Footer';
import { FormUrl } from '@/components/FormUrl';
import { Header } from '@/components/Header';
import { ToastContainer } from 'react-toastify';

export default function Home() {
  return (
    <>
      <ToastContainer />
      <div className="h-[100vh] w-full flex flex-col items-center justify-between overflow-hidden">
        <Header />
        <FormUrl />
        <Footer />
      </div>
    </>
  );
}
