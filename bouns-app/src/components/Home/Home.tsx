import classNames from "classnames";
import styles from "./Home.module.scss";
import dots from "./../../assets/images/dots.png";
import charger from "./../../assets/images/charger.png";
import information_btn from "./../../assets/images/information-button 1.png";
import BonusCard from "../BonusCard/BonusCard";

export default function Home() {
  const cx = classNames.bind(styles);
  return (
    <section className={cx(styles.home)}>
      <section className={cx(styles.container)}>
        <header className={cx(styles.header)}>
          <div className={cx(styles.h_section_1)}>
            <img src={dots} alt="dots" />
            Figma
          </div>
          <div>9:42 AM</div>
          <div className={cx(styles.h_section_2)}>
            42% <img src={charger} alt="dots" />
          </div>
        </header>
        <section className={cx(styles.infoCnt)}>
          <div>
            <p>ЛОГОТИП</p>
          </div>
          <div>
            <img src={information_btn} alt="btn" />
          </div>
          <section>
            <BonusCard />
          </section>
        </section>
      </section>
    </section>
  );
}
