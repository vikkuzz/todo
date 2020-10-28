import NewTaskForm from "../NewTaskForm";

const AppHeader = () => {
  return (
    <div className="header">
      <h1>todos</h1>
      <NewTaskForm />
    </div>
  );
};
export default AppHeader;
