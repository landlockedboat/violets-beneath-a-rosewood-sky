import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { LegacyRef, useEffect, useRef } from "react";

export const GameTextArea = () => {
  const gameText = useSelector((state: RootState) => state.gameText.value);
  const messagesEndRef: LegacyRef<HTMLDivElement> = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [gameText]);

  return (
    <div style={{ overflow: "scroll" }}>
      {gameText.map((text) => (
        <div key={text.id}>{text.value}</div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};
