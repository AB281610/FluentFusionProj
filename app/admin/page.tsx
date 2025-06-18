import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/admin";
import AppClient from "./AppClient";

const AdminPage = () => {
  if (!isAdmin) {
    redirect("/");
  }

  return <AppClient />;
};

export default AdminPage;
