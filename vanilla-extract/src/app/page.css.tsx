import { style } from '@vanilla-extract/css';

export const styles = {
  main: style({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  }),
  imageWrapper: style({
    padding: 12,
  }),
  image: style({
    width: 240,
    height: 240,
    borderRadius: 8,
  }),
  title: style({
    fontSize: 24,
    fontWeight: 'bold',
  }),
  description: style({
    fontSize: 16,
  }),
  card: style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    transition: '0.3s',
    ':hover': {
      boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.2)',
    },
  }),
};
