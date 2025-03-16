import { FormUrl } from '@/components/FormUrl';
import { ToastContainer } from 'react-toastify';
import { Cabin } from 'next/font/google';

const cabin = Cabin({
  weight: '500',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div className={`${cabin.className} bg-primary `}>
      <ToastContainer />
      <FormUrl />
    </div>
  );
}
