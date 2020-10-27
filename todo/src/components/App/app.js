import AppHeader from "../AppHeader";
import TaskList from "../TaskList";
import Footer from "../Footer";

const App = () => {
  const taskData = [
    { description: "Completed task", id: "01" },
    { description: "Editing task", id: "02" },
    { description: "Active task", id: "03" },
  ];
  return (
    <section className="todoapp">
      <AppHeader />
      <TaskList todos={taskData} />
      <Footer />
    </section>
  );
};

export default App;
