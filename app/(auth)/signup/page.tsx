import React from "react";
import style from "./signup.module.css";
import Image from "next/image";

const page = () => {
  return (
    <form className={style.form}>
      <div className="flex justify-center">
        <Image width={30} height={30} src="/cloud6.png" alt="sign up" />
      </div>
      <div>
        <p>Email</p>
        <input type="email" />
      </div>
      <div>
        <p>Passowrd</p>
        <input type="password" />
      </div>
      <p>
        Already have an account ?{" "}
        <a href="/signup" className="text-blue-600 cursor-pointer">
          Sign in
        </a>
      </p>
    </form>
  );
};

export default page;
