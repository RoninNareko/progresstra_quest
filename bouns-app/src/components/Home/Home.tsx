import classNames from "classnames";
import styles from "./Home.module.scss";
import dots from "./../../assets/images/dots.png";
import charger from "./../../assets/images/charger.png";
import information_btn from "./../../assets/images/information-button 1.png";
import BonusCard from "../BonusCard/BonusCard";
import { useEffect, useState } from "react";
import fetchAccessToken from "../../helpers/fetchAccessToken";
import fetchBonusses from "../../helpers/fetchBonusses";
import { BonusInfoType } from "../BonusCard/BonusCard.types";

const getAccessToken = async () => {
  return await fetchAccessToken();
};

const getBonusses = async (accessToken: string) => {
  return await fetchBonusses(accessToken);
};

const Home = () => {
  const cx = classNames.bind(styles);
  const [data, setData] = useState<BonusInfoType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = await getAccessToken();
        const bonus = await getBonusses(accessToken);
        setData(bonus);
      } catch (error) {
        // @ts-ignore
        console.error("Error fetching data:", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

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
            {loading ? (
              <p className={cx(styles.loadingText)}>Загрузка...</p>
            ) : (
              data && <BonusCard data={data} />
            )}
          </section>
        </section>
      </section>
    </section>
  );
};

export default Home;
