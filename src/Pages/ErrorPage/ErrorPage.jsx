
import Lottie from 'react-lottie';
import error from "../../../public/animation_lnhzy7r4.json"
export default  function ErrorPage () {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: error,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

return (
  <div className='min-h-[450px] flex justify-center items-center'>
    <Lottie 
    options={defaultOptions}
      height={400}
      width={400}
    />
  </div>
);
}
