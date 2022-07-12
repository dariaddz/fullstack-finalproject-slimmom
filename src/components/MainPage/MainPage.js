import { Outlet } from 'react-router-dom';
import s from './MainPage.module.css'


function MainPage({children}){
return(<>
<div className={s.container}>
<Outlet />
{children}
</div>


</>)
}
export default MainPage