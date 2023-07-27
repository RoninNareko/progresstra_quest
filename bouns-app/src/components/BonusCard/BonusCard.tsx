import classNames from "classnames";
import styles from "./BonusCard.module.scss";
import btn from "../../assets/images/btn.png";
import fire from "../../assets/images/fire.png";
import { BonusCardProps } from "./BonusCard.types";
import formatDateToDayMonth from "../../helpers/formatDateToDayMonth";

export default function BonusCard({ data }: BonusCardProps) {
  const cx = classNames.bind(styles);

  const formattedDate = formatDateToDayMonth(data.dateBurning);
  return (
    <section className={cx(styles.cardCnt)}>
      <div>
        <h2>{data.currentQuantity} бонусов</h2>
        <p>
          {formattedDate}&nbsp;сгорит <img src={fire} alt="fire" />{" "}
          {data.forBurningQuantity}
          &nbsp;бонусов
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
