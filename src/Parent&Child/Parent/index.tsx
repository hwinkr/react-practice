import React, { ReactNode, useState } from 'react';

// TODO : 리액트 부모-자식 컴포넌트사이의 관계 이해하기
/*
컴포넌트 : 최소 단위 UI
상위 컴포넌트 - 부모 컴포넌트
하위 컴포넌트 - 자식 컴포넌트

부모-자식 관계가 설정되면 부모 컴포넌트에서는 자식 컴포넌트의 정보에 접근할 수 있게 된다.

1. 부모-자식 관계를 가지는 패턴으로 렌더링 최적화에 기여하기
*/
interface ParentComponentProps {
  children: ReactNode;
}

const ParentComponent = ({ children }: ParentComponentProps) => {
  console.log('parent component rerendered');
  return <div>{children}</div>;
};

const ParentMemo = React.memo(ParentComponent);

export default ParentMemo;
