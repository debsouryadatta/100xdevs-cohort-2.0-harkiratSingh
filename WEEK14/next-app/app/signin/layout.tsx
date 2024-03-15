import { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'Sign in',
};

export default function SigninLayout({
   children,
}: Readonly<{ children: React.ReactNode }>) {
   return (
      <div>
         <div className='w-fit p-2 px-8 relative text-center top-[8rem] left-[calc(50%-8rem)] border border-slate-200 rounded-2xl'>
            Login now to get 20% off
         </div>
         {children}
      </div>
   );
}
