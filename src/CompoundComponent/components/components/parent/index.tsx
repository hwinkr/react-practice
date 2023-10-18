import React, { Children, ReactNode, isValidElement } from 'react';

// TODO
// 1. 리액트 합성 컴포넌트에 대해서 학습한다
// 2. isValidElement?
// 3. propsWithChildren?

// PropsWithChildren
/*
리액트 & 타입스크립트를 활용하다보면 children을 props로 내려주고 children의 타입을 설정해줘야 한다.
children의 타입을 설정해주는 방식에는 여러가지가 있다

1. 직접 타입 설정하기
interface Props{
    children: ReactNode
    //...
}
2. PropsWithChildren 사용하기
PropsWithChildren: 한 컴포넌트가 props를 여러개 받는데, props 중 children(ReactNode)가 있을 경우 활용할 수 있다.

type PropsWithChildren<P= unknown> = P & { children ?: ReactNode | undefined }
children을 optional로 받으므로 children을 무조건 넘겨줘야 하는 것을 강제하지 못한다. 따라서, 옵셔널을 제거한 타입을 추가로 생성함으로써 이를 해결할 수 있다.
*/

type StrictPropsWithChildren<T = unknown> = T & { children: ReactNode };

const Parent = ({ children }: StrictPropsWithChildren) => {
  const childArray = Children.toArray(children);
  const filteredChild = childArray.filter(
    (child) => isValidElement(child) && child.props.name === '현웅',
  );
  return <div>{filteredChild}</div>;
};

export default Parent;

/*
import React, { Children, isValidElement } from 'react';

interface Props {
  children: React.ReactNode;
}

// TODO
// 1. 리액트 합성 컴포넌트에 대해서 학습한다.
// ? isValidElement는 어떤 역할을 하는 함수인가

const CompoundComponent = ({ children }: Props) => {
  const childArray = Children.toArray(children);
  const filteredChildArray = childArray.filter(
    (child) => isValidElement(child) && child.props.name === '현웅',
  );
  console.log(filteredChildArray);
  return <div>{children}</div>;
};

export default CompoundComponent;

type ComponentType = typeof CompoundComponent;

*/
