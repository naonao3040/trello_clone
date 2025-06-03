import { v4 as uuid } from "uuid";

export const AddTaskCardButton = ({ taskCardList, setTaskCardList }) => {
  const taskCardId = uuid();
  const addTaskCard = () => {
    setTaskCardList([
      ...taskCardList,
      {
        id: taskCardId,
        draggableId: `item${taskCardId}`,
      },
    ]);
  };

  return (
    <div className="assTaskCardButtonArea">
      <button className="addTaskCardButton" onClick={addTaskCard}>
        +
      </button>
    </div>
  );
};
