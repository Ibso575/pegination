import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

const MainLayout = () => {
  const navigation = useNavigation();

  return (
    <>
      <Header />

      {navigation.state === "loading" ? (
        <div className="flex justify-center py-10">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
        </div>
      ):(
        <Outlet />
      )};
      <Footer />
    </>
  );
};

export default MainLayout;