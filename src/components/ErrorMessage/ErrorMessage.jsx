import s from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div className={s.errorMessage}>
      <p className={s.errorText}>Your request did not return any results!</p>
    </div>
  );
};

export default ErrorMessage;
