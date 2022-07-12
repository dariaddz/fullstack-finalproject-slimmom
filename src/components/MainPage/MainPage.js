import { Outlet } from 'react-router-dom';
import s from './MainPage.module.css'


function MainPage(){
return(<>
<div className={s.container}>
    <div className={s.blur}>
<Outlet />
</div>

</div>


</>)
}
export default MainPage