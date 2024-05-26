"use client";

import { admin } from "@/actions/admin";
import RoleGate from "@/app/auth/role-gate";
import FormSuccess from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { UserRole } from "@prisma/client";

const AdminPage = () => {
  const onApiRouteClick = () => {
    fetch("api/admin").then((res) => {
      if (res.ok) {
        console.log("Success!");
      } else {
        console.error("FORBIDDEN");
      }
    });
  };

  const onServerActionClick = () => {
    admin().then((data) => {
      if (data.error) {
        console.error(data.error);
      }
      if (data.success) {
        console.log(data.success);
      }
    });
  };
  return (
    <div className="mt-10">
      <p className="text-3xl font-semibold">Админ панель</p>
      <div className="mt-4 space-y-2">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess message="Успешно! Вы получили доступ к админке." />
        </RoleGate>
        <div className="mt-4 space-y-2">
          <div className="flex flex-row items-center justify-between">
            <p className="font-semibold">Admin-only API route</p>
            <Button onClick={onApiRouteClick}>Тест</Button>
          </div>
          <div className="flex flex-row items-center justify-between">
            <p className="font-semibold">Admin-only Server action</p>
            <Button onClick={onServerActionClick}>Тест</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
