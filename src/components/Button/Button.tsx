import styles from "./Button.module.scss";

type ButtonProps = {
  text: string;
  onClick: () => void;
};

export default function Button(props: ButtonProps) {
  const { text, onClick } = props;
  return (
    <button onClick={onClick} className={styles.button}>
      {text}
    </button>
  );
}
