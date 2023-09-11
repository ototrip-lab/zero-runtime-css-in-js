'use client';

import { useState } from 'react';

import { css } from '@kuma-ui/core';

type Props = {
  isClicked: boolean;
};

const Component = ({ isClicked }: Props) => {
  return (
    <div
      className={
        isClicked
          ? css`
              background-color: red;
            `
          : css`
              background-color: blue;
            `
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
