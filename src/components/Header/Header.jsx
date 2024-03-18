import { CgProfile } from "react-icons/cg";
const Header = () => {
    return (
        <div>
            <div className="flex justify-around mt-8 max-w-7xl mx-auto">
                <p className="font-bold text-[25px]">Recipe Calories</p>
                    <ul className="flex gap-8 mt-3">
                        <li><a href="">Home</a></li>
                        <li><a href="">Recipes</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Search</a></li>
                    </ul>
                    <div>
                        <input className="p-2 rounded-lg bg-[150B2B0D] border-none" type="text" placeholder="Search"/>
                        <button className="ml-5 text-[#0BE58A] w-[48px] h-[48px]"><CgProfile></CgProfile></button>
                    </div>
            </div>

            <div className="bg-cover bg-no-repeat w-[1320px] h-[600px] mx-auto mt-8 relative" style={{ backgroundImage: 'url("https://i.ibb.co/980pNjk/Rectangle-1.png")'}}>
                <div className="absolute text-center mt-40 left-40">
                    <h3 className="text-[#FFFFFF] text-6xl font-bold">Discover an exceptional cooking <br /> class tailored for you!</h3>
                    <p className="text-[#FFFFFF] mt-5 text-2xl">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ <br /> coding problems to become an exceptionally well world-class Programmer.</p>
                    <button className="w-[187px] h-[65px] bg-[#0BE58A] rounded-3xl mt-5">Explore Now</button>
                    <button className="w-[187px] h-[65px] bg-[#FFFFFF] rounded-3xl ml-5  font-bold border-[2px solid #FFFFFF]">Our Feedback</button>
                </div>
            </div>

            <div className="w-[823px] mx-auto text-center mt-16">
                <h3 className="font-bold text-4xl">Our Recipes</h3>
                <p className="mt-5 text-[#150B2B99]">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>
        </div>
    );
};

export default Header;