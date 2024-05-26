const LayoutAuth = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-slate-900 to-slate-700 flex items-center justify-center">
      {children}
    </div>
  );
};

export default LayoutAuth;
