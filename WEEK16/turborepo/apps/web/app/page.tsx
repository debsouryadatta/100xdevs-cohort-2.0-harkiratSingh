import Inputbox from '@repo/ui/Inputbox'
import {URL} from '@repo/common/index'

const page = () => {
  console.log(URL);
  
  return (
    <>
    {`${URL}`}
      <div>Web App</div>
      <Inputbox />

    </>
  );
};

export default page;
