'use client';

import { useRouter } from 'next/navigation';

interface LoginButtonProps extends React.HtmlHTMLAttributes<HTMLElement> {
  mode?: 'modal' | 'redirect';
  asChild?: boolean;
}
const LoginButton: React.FC<LoginButtonProps> = ({ mode = 'redirect', asChild, children }) => {
  const router = useRouter();
  const onClick = () => {
    router.push('/auth/login');
  };
  if (mode === 'modal') {
    return <span>Implement modal</span>;
  }
  return <span onClick={onClick}>{children}</span>;
};

export default LoginButton;
