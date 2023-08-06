import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import { useState } from "react";
import style from "./Root.module.css"



const Root = () => {
  const [hide, setHide] = useState(true);
  const hideHandler = () => {
    setHide(!hide);
  }
  return <div>
    {hide
      ? <div className={style.navbar}>
        <MainNavigation onHide={hideHandler} />
      </div>
      : <div className={style.openIcon}><span class="material-symbols-outlined" onClick={hideHandler}>
        top_panel_open
      </span></div>}
    <main>
      <Outlet />
    </main>
  </div>
};
export default Root;