import "./InputField.css";

function InputField({ type, name }) {
  return (
    <div className="inputContainer">
      <input type={type} name={name} className="textInput" />
    </div>
  );
}

export default InputField;
