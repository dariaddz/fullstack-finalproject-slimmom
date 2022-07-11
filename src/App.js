// import logo from "./logo.svg";
import './App.css';
import DailyCaloriesForm from './components/DailyCaloriesForm';
import Modal from "./components/Modal"
import MainPage from './components/MainPage/MainPage';
import DailyCalorieIntake from './components/DailyCalorieIntake'
import { useState } from 'react';
import {useSelector} from 'react-redux';


function App() {
  const userData = useSelector(state => {
        console.log("state:", state)
         return state.userData.user});
  const [showModal,setShowModal] = useState(false);
  console.log("showModal:",showModal)
  return (
    <>
    <MainPage>   
    
      {showModal &&userData &&(<Modal onClose={()=>setShowModal(false)}>{<DailyCalorieIntake/>}</Modal>)}
     <DailyCaloriesForm onOpenModal={()=>{setShowModal(true) }}/>

 
     </MainPage>
  
    </>
  );
}

export default App;
