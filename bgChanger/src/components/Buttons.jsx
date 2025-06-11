
import '../index.css';


function Button({ colorType }) {
    // console.log(colorType);
    const colorClassMap = {
  red: 'bg-red-500',
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  yellow: 'bg-yellow-500',
  pink: 'bg-pink-500',
  purple: 'bg-purple-500',
};
  return (
<button
  type="button"
  className={`${colorClassMap[colorType]} text-white px-14 py-2 rounded-full m-2`}
  onClick={() => {
    document.body.style.backgroundColor = colorType;
  }}
>
  {colorType}
</button>
    
  );
}

export default Button;
