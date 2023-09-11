import { css } from '@kuma-ui/core';

const styles = {
  main: css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px;
  `,
  imageWrapper: css`
    padding: 12px;
  `,
  image: css`
    width: 240px;
    height: 240px;
    border-radius: 8px;
  `,
  title: css`
    font-size: 24px;
    font-weight: bold;
  `,
  description: css`
    font-size: 16px;
  `,
  card: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    &:hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
  `,
};

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={'https://picsum.photos/240/240'} className={styles.image} />
        <div className={styles.title}>Title</div>
        <div className={styles.description}>Description</div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <main className={styles.main}>
      <Card />
    </main>
  );
};

export default Home;
