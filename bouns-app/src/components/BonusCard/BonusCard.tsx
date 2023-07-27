import classNames from "classnames";
import styles from "./BonusCard.module.scss";
import btn from "../../assets/images/btn.png";
import fire from "../../assets/images/fire.png";

export default function BonusCard() {
  const cx = classNames.bind(styles);
  return (
    <section className={cx(styles.cardCnt)}>
      <div>
        <h2>300 бонусов</h2>
        <p>
          29.03 сгорит <img src={fire} alt="fire" /> 250 бонусов
        </p>
      </div>
      <div>
        <button>
          <img src={btn} alt="btn" />
        </button>
      </div>
    </section>
  );
}
