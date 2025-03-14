import { Footer } from '@/components/Footer';
import { FormUrl } from '@/components/FormUrl';
import { Header } from '@/components/Header';
import { ToastContainer } from 'react-toastify';
import { Questrial, Cabin } from 'next/font/google';

export const questrial = Questrial({
  weight: '400',
  subsets: ['latin'],
});

export const cabin = Cabin({
  weight: '500',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div className={`${cabin.className} bg-primary`}>
      <ToastContainer />
      <div className="h-[100vh] w-full flex flex-col items-center justify-between lg:overflow-hidden">
        <Header />
        <FormUrl />
        <Footer />
      </div>
    </div>
  );
}
