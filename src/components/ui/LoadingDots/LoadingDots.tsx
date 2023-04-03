import s from "./LoadingDots.module.css";

const LoadingDots: React.FC = () => {
  return (
    <span className={s.root}>
      <span className={s.dot} />
      <span className={s.dot} />
      <span className={s.dot} />
    </span>
  );
};

export default LoadingDots;
