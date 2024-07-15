import { useSelector } from "react-redux";

export const useFilteredTasks = (filter) => {
  const tasks = useSelector((state) => state.todo.tasks);

  const filteredTasks = tasks.filter((task) => {
    switch (filter) {
      case "Completed":
        return task.status === "Completed";
      case "In Process":
        return task.status === "In Process";
      case "Failed":
        return task.status === "Failed";
      default:
        return true;
    }
  });

  const statusCounts = tasks.reduce((counts, task) => {
    counts[task.status] = (counts[task.status] || 0) + 1;
    return counts;
  }, {});

  return {
    filteredTasks,
    statusCounts,
  };
};
