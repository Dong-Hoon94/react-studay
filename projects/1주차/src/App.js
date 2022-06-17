import React from 'react';
import Footer from './Footer';
import Header from './Header';
// import Users from './Users';
import Cars from './Cars';

// css
import './App.css';

function App() {  //App component
  // const users = [
  //   {id: 1, name: '이동현', age: 32},
  //   {id: 2, name: '이동훈', age: 29},
  //   {id: 3, name: '이동욱', age: 29},
  // ]

  const cars = [
   {idx:1, year:"12년식", car:"소나타", yd:"8개월"},
   {idx:2, year:"24년식", car:"벤츠", yd:"10개월"},
  ]

  // console.log(users)
  return (
    <div className="App">
      <Header/>
      {/* <Users users={users} cars={cars}/> */}
      <Cars data={cars}/>
      <Footer/>
    </div>
    
       //Fragment :div 태그 대신 사용 
       //          쓸때없이 div만들고 싶지 않을때 사용하며 재 사용성이 높다.
       //2개이상의 태그인경우 하나의 부모 태그로 감싼다. (*)
       //자바스크립트 코드는 {}안에 작성.
       //undefined,null는 리턴을 하면 안됨. (에러없다고 뜸)
       //리액트에서 키워드를 충돌방지 하기 위해 class 쓰는게 아니라 className을 작성해야 올바르게 사용가능.
       //주석처리하는 방법은 자바스크립트 주석이랑 똑같다.
       //{ /* 주석처리 */}
       
  );
}

/*JSX 
 컴포턴트의 return문 안에 담긴 html(xml) 형식의 구문
 자바스크립트 확장 문법

 컴포넌트 
 기능별로 쪼갠 독립적인 코드or 집합

 */

export default App;
