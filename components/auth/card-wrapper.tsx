import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import Social from '@/components/auth/social';
import BackButton from './back-button';

interface CardWrapperProps extends React.HtmlHTMLAttributes<HTMLElement> {
  headerLabel: string;
  backButtonLabek: string;
  backButtonHref: string;
  showSocial?: boolean;
}

const CardWrapper: React.FC<CardWrapperProps> = ({
  children,
  headerLabel,
  backButtonHref,
  backButtonLabek,
  showSocial,
}) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader className="w-full text-center text-2xl font-semibold">{headerLabel}</CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={backButtonLabek} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
