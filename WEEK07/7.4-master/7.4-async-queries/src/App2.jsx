import React, { useEffect } from "react";
import { useRecoilState, useRecoilStateLoadable, useRecoilValue, useRecoilValueLoadable } from "recoil";
import { networkAtom, totalNotificationSelector } from "./atoms2";
import axios from "axios";

const App2 = () => {
  const [networkCount, setNetworkCount] = useRecoilStateLoadable(networkAtom);
  const totalNotificationCount = useRecoilValueLoadable(totalNotificationSelector);

  // useEffect(() => {
  // fetch
  //   axios.get("https://sum-server.100xdevs.com/notifications")
  //     .then(res => {
  //       setNetworkCount(res.data)
  //     })
  // }, [])

  console.log(networkCount);

  if(networkCount.state == "loading") return <div>Loading...</div>

  return (
    <>
      <button>Home</button>

      <button>
        My network ({networkCount.contents.network >= 100 ? "99+" : networkCount.contents.network}
        )
      </button>
      <button>Jobs ({networkCount.contents.jobs})</button>
      <button>Messaging ({networkCount.contents.messaging})</button>
      <button>Notifications ({networkCount.contents.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  );
};

export default App2;
