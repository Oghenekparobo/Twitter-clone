import {BsTwitter} from 'react-icons/bs'


const Loading = () => {
    return (  
        <div className="bg-black h-screen font-roboto flex flex-col justify-center items-center space-y-28">

        <div className="loading-logo text-3xl text-blue-500">
          <BsTwitter/>
        </div>

        
      </div>
    );
}
 
export default Loading;