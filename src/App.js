import React, { useState } from "react";
import axios from "axios";
import { motion, useMotionValue, useTransform } from "framer-motion";
import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loader from './components/loader/Loading'

export default function App() {
  const [userName, setUserName] = useState("");
  
  const [user, setUser] = useState(null);
  
  const fetchHandler = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${userName}`
      );

      const data = response.data;
      setUser({
        image: data.avatar_url,
        username: data.login,
        name: data.name,
        public_repo: data.public_repos,
        public_gists: data.public_gists,
        created_at: data.created_at.toString().substring(0, 10),
      });
    } catch (error) {
      alert("Please enter a valid user name.")
      console.error(error);
    }
  };

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [30, -30]);

  return (
    <>
      <div className="flex bg-background">
        <div className="w-1/3 h-screen flex justify-center items-center border-r-2 border-bordercolor">
          <Header />
          <div className="w-5/6 input-field flex flex-col items-center">
            <input
              className="w-full p-4 rounded-full bg-inputsearch border border-bordercolor focus:bg-bordercolor-1 caret-primary text-primary font-medium"
              type="text"
              placeholder="Umesh-JNU"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <button
              className="w-1/2 mt-5 p-1 text-center font-medium rounded text-primary bg-btnbgcolor border border-btnborder hover:bg-btnbghover hover:border-btnborderhover"
              onClick={fetchHandler}
            >
              Create Card
            </button>
          </div>
        </div>
        <div className="w-2/3 h-screen flex justify-center items-center">
          <motion.div
            style={{ x, y, rotateX, rotateY, z: 100, cursor: "grab" }}
            drag
            dragElastic={0.16}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }} whileTap={{ cursor: "grabbing" }}
          > {!user ? <Loader /> : 
            <Card user={user} />}
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}
