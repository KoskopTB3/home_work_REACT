import "./App.css";
import SignIn from "./components/task_1/SignIn.jsx";
import AirplaneTicketClass from "./components/task_2/airplane-ticket-class.jsx";
import Translator from "./components/task_3/translator.jsx";
import BulletedList from "./components/task_4/BulletedList.jsx";
import WebPage from "./components/task_5/WebPage";

import workersList from "./components/data/workersList";
import webDataList from "./components/data/webDataList";

import tableImg from "./assets/img/task_3_img/table.png";
import OrderManager from "./components/task_6/OrderManager.jsx";

function App() {
  const userData = {
    login: "Ivan",
    password: "111",
  };

  const wordData = {
    en: "table",
    ua: "стіл",
    src: tableImg,
  };

  return (
    <>
      <h4>task 1</h4>
      <SignIn userData={userData} />
		<h4>task 2</h4>
      <AirplaneTicketClass />
		<h4>task 3</h4>
      <Translator wordData={wordData} />
		<h4>task 4</h4>
      <BulletedList workersList={workersList} />
		<h4>task 5</h4>
      <WebPage webDataList={webDataList} />
		<h4>task 6</h4>
		<OrderManager/>
    </>
  );
}

export default App;
