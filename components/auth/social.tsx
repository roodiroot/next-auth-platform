"use client";

import { signIn } from "next-auth/react";
import {} from "react-icons/fc";
import { FaGithub, FaYandex } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

const Social = () => {
  const onClick = (provider: "github" | "yandex") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };
  return (
    <div className='w-full flex gap-x-2 items-center'>
      <Button
        onClick={() => onClick("yandex")}
        size='lg'
        className='w-full'
        variant='outline'
      >
        <FaYandex className='h-5 w-5 text-red-500' />
      </Button>
      <Button
        onClick={() => onClick("github")}
        size='lg'
        className='w-full'
        variant='outline'
      >
        <FaGithub className='h-5 w-5' />
      </Button>
    </div>
  );
};

export default Social;
