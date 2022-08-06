
import Button from "./Button"
import style from "./App.module.css"
import { useState, useEffect } from "react";


function Hello(){
  // function byeFn(){
  //   console.log("bye")
  // }

  // function hiFn(){
  //   console.log("created")
  //   return byeFn
  // }
  // useEffect(hiFn,[])


  useEffect(()=>{

    //cleanup function 컴포넌트가 사라지거나 없어질때
    return () => console.log("destroyed")
  },[])
  return <h1>Hello</h1>;
}


//compoenect refresh, 새로운 데이터를 불러올때마다 ui를 새로고친다
function App() {
  const [counter,setValue] = useState(0);
  const [keyword,setKeyword] = useState("")


  const [showing,setShowing] = useState(false)

  const onCLick = () => setValue(prev => prev + 1) 

  const onChnage = (event) => setKeyword(event.target.value)
  // console.log("call api")

  //useEffect 랜더링 될때 한번만 호출되게
  useEffect(()=>{
    console.log("once")
  },[])


  //keyword 값이 변화할때 함수를 실행해라
  useEffect(()=>{
    if(keyword !== "" && keyword.length > 5){
      console.log("Search",keyword)
    }
  },[keyword])

  useEffect(()=>{
    console.log("I only onece count")
  },[counter])


  const onShowingClick = () => setShowing((prev) => !prev)
  return (
    <div>
      {/* <h1 className={style.title}>Welcome back!!!</h1>
      <Button text={"Continue"}></Button> */}

      <input value={keyword} onChange={onChnage} type="text" placeholder="Search hear.."/>
      <h1>{counter}</h1>
    <button onClick={onCLick}>clicke me</button>


      <br></br><br></br>
      {showing ? <Hello/> :null}
    <button onClick={onShowingClick}>{showing ? "Hide" : 'Show'}</button>
    </div>
  );
}

export default App;
