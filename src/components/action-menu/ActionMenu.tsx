import { useDispatch } from "react-redux";
import { addText } from "../../slices";

export const ActionMenu = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() =>
          dispatch(
            addText({
              value: "Some time has passed...",
              time: new Date().getMilliseconds(),
            })
          )
        }
      >
        Wait
      </button>
    </div>
  );
};
