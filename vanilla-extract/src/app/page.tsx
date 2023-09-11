import { styles } from './page.css';

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
