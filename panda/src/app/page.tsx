import { css } from '../../styled-system/css';

const styles = {
  main: css({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '12px',
  }),
  imageWrapper: css({
    padding: '12px',
  }),
  image: css({
    width: '240px',
    height: '240px',
    borderRadius: '8px',
  }),
  title: css({
    fontSize: '24px',
    fontWeight: 'bold',
  }),
  description: css({
    fontSize: '16px',
  }),
  card: css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '16px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    transition: '0.3s',
    _hover: {
      boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.2)',
    },
  }),
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
