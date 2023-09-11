'use client';

import { useState } from 'react';

import { styles } from './page.css';

type Props = {
  isClicked: boolean;
};

const Component = ({ isClicked }: Props) => {
  return (
    <div className={isClicked ? styles.clicked : styles.unClicked}>
      Component
    </div>
  );
};

const Dynamic = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <Component isClicked={isClicked} />
      <button onClick={() => setIsClicked((pre) => !pre)}>Click</button>
    </>
  );
};
export default Dynamic;
