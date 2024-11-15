import React, { useContext } from "react";
import { AuthContext, type IAuthContext } from "react-oauth2-code-pkce";

const Sidebar = ({setWorkout}) => {
    const {logOut} = useContext<IAuthContext>(AuthContext)

    return (
        <aside className="flex flex-col w-32 md:w-52 lg:w-64 bg-gray-100 text-white h-screen">
            <h2 className="text-black font-racing font-bold text-xl md:text-2xl lg:text-3xl self-center mt-4">Navigation</h2>
            <ul className="flex flex-col mt-4">
                <button className="w-full text-black text-base md:text-lg lg:text-xl py-2 hover:bg-green-500 rounded" onClick={() => (setWorkout({}))}>Search</button>
                <button className="w-full text-black text-base md:text-lg lg:text-xl py-2 hover:bg-green-500 rounded" onClick={() => logOut()}>Log Out</button>
            </ul>
        </aside>
    );


}
export default Sidebar;