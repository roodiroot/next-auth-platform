import { logout } from '@/actions/logout';
import { cn } from '@/lib/utils';

interface LogoutButtonProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

const LogoutButton: React.FC<LogoutButtonProps> = ({
  className,
  children,
  ...props
}) => {
  const onClick = () => {
    logout();
  };
  return (
    <span
      {...props}
      onClick={onClick}
      className={cn('cursor-pointer w-full h-full inline-block', className)}
    >
      {children}
    </span>
  );
};

export default LogoutButton;
