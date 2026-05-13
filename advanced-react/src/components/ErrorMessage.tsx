interface Props {
  message: string;
}

const ErrorMessage = ({ message }: Props) => {
  return <h2>{message}</h2>;
};

export default ErrorMessage;