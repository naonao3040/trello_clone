import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { Task } from "./Task";

export const Tasks = ({ taskList, setTaskList }) => {
  const handleDragEnd = (result) => {
    const { source, destination } = result;

    // ドロップ先がない場合は何もしない
    if (!destination) return;

    // タスクを並び替える
    const reorderedTaskList = Array.from(taskList);
    const [removed] = reorderedTaskList.splice(source.index, 1);
    reorderedTaskList.splice(destination.index, 0, removed);
    setTaskList(reorderedTaskList);
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="droppableContainer"
            >
              {taskList.map((task, index) => (
                <div key={task.id}>
                  <Task
                    task={task}
                    taskList={taskList}
                    setTaskList={setTaskList}
                    index={index}
                  />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
