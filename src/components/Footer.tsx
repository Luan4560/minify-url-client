'use client';

export const Footer = () => {
  return (
    <footer className="w-full flex bg-secondary items-center justify-center pt-4">
      <div className="w-full flex flex-col items-center gap-4">
        <div className="w-full flex flex-col items-start px-4">
          <div className="flex items-start gap-2">
            <p className="text-white text-[10px]">Phone:</p>
            <span className="text-white text-[10px]">+55 62 993341750</span>
          </div>

          <div className="flex gap-2">
            <p className="text-white text-[10px]">Email:</p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=luan.nascimento.dev@gmail.com&su=subject_here&body=body_here"
              className="text-white text-[10px]"
            >
              luan.nascimento.dev@gmail.com
            </a>
          </div>
        </div>

        <div>
          <p className="text-white text-[10px]">
            Copyright © 2025 MinifyURL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
