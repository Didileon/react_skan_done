function MyButton() {
  const style = {
    backgroundColor: "#5970ff",
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return <button style={style}>Подробнее</button>;
}

export default MyButton;





//function AlertButton({ message, children }) {
//    return (
//        <button onClick={() => alert(message)}>
//            {children}
//        </button>
//    );
//}
//
//export default function Toolbar() {
//    return (
//        <div>
//            <AlertButton message="Playing!">
//                Подробнее
//            </AlertButton>
//            <AlertButton message="Uploading!">
//                Upload Image
//            </AlertButton>
//        </div>
//    );
//}