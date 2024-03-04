import { Link } from "react-router-dom";
import Search from "./Search";
import { logout } from '../services/Auth';
import {useNavigate, useSearchParams} from 'react-router-dom';
import{toast} from 'react-toastify';

export default function Header({cardItems}){
    const navigate= useNavigate();
       function datalogout(){
        logout();
        navigate('/Login')
        toast.error("Logout succesfully!")
   }
    return <nav class="navbar row">
        <div class="col-12 col-md-3">
           
            <div class="navbar-brand">
            <Link to="/"><img width="150px" src="/images/logo.jpg" /></Link>
                
            </div>
        </div>

        <div class="col-12 col-md-6 mt-2 mt-md-0">
       <Search/>
        </div>

        <div class="col-12 col-md-3 mt-4 mt-md-0 text-center">
            <Link to={"/card"}>
            <span id="cart" class="ml-3">Cart</span>
            <span class="ml-1" id="cart_count">{cardItems.length}</span>
            <img width="60px" src="\images\shopping.jpg" />
            </Link>
            <Link to="/Login">
          <button className="btnm">Login</button>
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;<button class="logout-button" onClick={datalogout} >Logout</button>
             </div>
    </nav>

}