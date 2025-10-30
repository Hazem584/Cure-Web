import GoCard from "../Components/GoCard";
import AddCard from "../Components/AddCard";

const Dashboard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen gap-8">
      <AddCard />
      <GoCard />
    </div>
  );
};

export default Dashboard;
