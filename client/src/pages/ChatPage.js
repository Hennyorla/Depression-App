import Chat from "../components/chatComponent/Chat";

const ChatPage = () => {
  return (
    <section className="container">
      <div className="row">
        <div className="col-lg-3"></div>
        <Chat />
        <div className="col-lg-3"></div>
      </div>
    </section>
  );
};

export default ChatPage;
