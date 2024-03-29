import { Routes, Route} from "react-router-dom"

import { Home } from "../Home"
import { Page404 } from "../Page404";
import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";
import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const Router = () => {
    return (
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/page1">
          <Route index={true} element={<Page1/>}/>
          <Route path="detailA" element={<Page1DetailA/>}/>
          <Route path="detailB" element={<Page1DetailB/>}/>
        </Route>
        <Route path="page2">
            <Route index={true} element={<Page2/>}/>
            <Route path=":id" element={<UrlParameter/>}/>
        </Route>
        <Route path="*" element={<Page404/>} />
      </Routes>
    );
};

