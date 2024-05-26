import NavbarSettings from "./_components/navbar-settings";

const ProtectedLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="min-h-[calc(100vh-96px-5.5rem)] w-full flex items-center">
      <div className="w-full px-4 py-9 sm:px-8">
        <div className="relative overflow-hidden w-full h-full bg-white-project rounded-[35px]  px-4 py-6 sm:px-14 sm:py-16 sm:rounded-[70px] dark:bg-accent-400">
          <NavbarSettings />
          {children}
        </div>
      </div>
    </div>
  );
};

export default ProtectedLayout;
