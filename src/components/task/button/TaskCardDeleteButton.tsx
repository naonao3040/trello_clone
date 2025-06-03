import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";

export const TaskCardDeleteButton = ({
  taskCardList,
  setTaskCardList,
  taskCard,
}) => {
  const HandleTaskCardDelete = (id) => {
    setTaskCardList(taskCardList.filter((card) => card.id !== id));
  };

  return (
    <div>
      <FontAwesomeIcon
        icon={faSquareXmark}
        className="taskCardDeleteButton"
        onClick={() => HandleTaskCardDelete(taskCard.id)}
      />
    </div>
  );
};
