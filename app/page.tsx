import LoginButton from "@/components/auth/login-button";
import Action from "@/components/sender/action";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-slate-900 to-slate-700'>
      <div className='flex flex-col gap-4 items-center'>
        <LoginButton>
          <Button size='lg'>Войти</Button>
        </LoginButton>
        <Action>
          <Button size='lg'>Отправить письмо</Button>
        </Action>
      </div>
    </main>
  );
}
