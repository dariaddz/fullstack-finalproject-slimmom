import s from './MainPage.module.css'

function MainPage({children}){
return(<>
<div className={s.container}>
{children}
</div>


</>)
}
export default MainPage