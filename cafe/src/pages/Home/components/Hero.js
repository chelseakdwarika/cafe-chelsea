import { Link } from "react-router-dom"
import HeroImage from "../../../assets/images/hero.jpg";


export const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row dark:text-slate-100 items-center">
        <div className="text my-5">
            <h1 className="text-5xl font-bold">Coffee and Tea Shop</h1>
            <p className="text-2xl my-7 px-1 dark:text-slate-300">Shop fair trade coffee beans and coffee accessories made locally..</p>
            <Link to="/products" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Explore Coffee Accessories</Link>
        </div>

        <div className="visual my-5 lg:max-w-xl">
            <img className="rounded-lg max-h-full" src={HeroImage} alt="coffee" />
        </div>
    </section>
  )
}
