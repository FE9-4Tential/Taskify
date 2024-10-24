import AddBtn from "./AddBtn";
import AddTodoBtn from "./addTodoBtn";
import DashboardCard from "./dashboardCard";
import { login } from "@/libs/api/auth";

export async default function Home() {
  const userdata = await login({
    email : "cklmckmc",
    password: "asdsad"
  })
  async function asd() {
    userdata = await login()
  }

  return (
    <div>
      <AddBtn content={"column"} wsize={"add_1"} />
      <AddBtn content={"column"} wsize={"add_2"} />
      <AddBtn content={"column"} wsize={"add_3"} hsize={"add_3"} />
      <AddBtn content={"dashboard"} wsize={"new_1"} />
      <AddBtn content={"dashboard"} wsize={"new_2"} />
      <AddBtn content={"dashboard"} wsize={"new_3"} hsize={"new_3"} />
      <AddBtn content={"delete"} wsize={"del_1"} hsize={"del_1"} />
      <AddBtn content={"delete"} wsize={"del_2"} hsize={"del_2"} />
      <AddBtn content={"delete"} wsize={"del_3"} hsize={"del_3"} />
      <AddBtn wsize={"todo_1"} hsize={"todo_1"} />
      <AddBtn wsize={"todo_2"} hsize={"todo_2"} />
      <AddBtn wsize={"todo_3"} hsize={"todo_3"} />
      <DashboardCard />
    </div>
  );
}
