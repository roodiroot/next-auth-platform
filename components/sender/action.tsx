"use client";

// import { sender } from "@/actions/sender";

const Action = ({ children }: { children: React.ReactNode }) => {
  //   const onClick = () => {
  //     sender("Привет это тестовая передача сообщения с сервера").then((d) =>
  //       console.log(d)
  //     );
  //   };
  return <div>{children}</div>;
};

export default Action;
