'use client';

import { useState } from 'react';

import { css } from '../../../styled-system/css';

type Props = {
  isClicked: boolean;
};

const Component = ({ isClicked }: Props) => {
  return (
    <div
      className={
        isClicked
          ? css({ backgroundColor: 'red' })
          : css({ backgroundColor: 'blue' })
      }
    >
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
