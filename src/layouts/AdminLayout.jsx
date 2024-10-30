import {SidebarWithBurgerMenu} from "@/components/Sidebar";

const AdminLayout = ({ children }) => {
  return (
    <div className="bg-slate-100 min-h-screen">
      <SidebarWithBurgerMenu children={children} />
    </div>
  );
}

export default AdminLayout;