const Message = () => {
  return (
    <div className={`chat chat-end`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png" />
        </div>
      </div>
      <div
        className={`chat-bubble text-white pb-2`}
      >
        Hi Whats Up
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        12:00
      </div>
    </div>
  );
};
export default Message;
