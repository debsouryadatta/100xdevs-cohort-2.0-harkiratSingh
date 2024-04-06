import { useRecoilState, useRecoilValue } from "recoil";
import {
  jobsAtom,
  messagesAtom,
  networkAtom,
  notificationsAtom,
  totalNotificationSelector,
} from "./atoms2";

const App2 = () => {
  const networkCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const messagesCount = useRecoilValue(messagesAtom);
  // const notificationsCount = useRecoilValue(notificationsAtom);

  const totalNotificationCount = useRecoilValue(totalNotificationSelector);
  const [notificationsCount, setNotificationsCount] = useRecoilState(notificationsAtom);

  const increaseNotifications = () => {
    setNotificationsCount(c => c + 1);
  }

  return (
    <div>
      <button>Home</button>

      <button>Network ({networkCount})</button>
      <button>Jobs ({jobsCount})</button>
      <button>Messages ({messagesCount})</button>
      <button>Notifications ({notificationsCount})</button>

      <button onClick={increaseNotifications}>Me ({totalNotificationCount})</button>
    </div>
  );
};

export default App2;
