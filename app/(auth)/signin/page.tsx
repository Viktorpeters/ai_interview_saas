import React from "react";
import Image from "next/image";
import styles from "./sign.module.css";

const page = () => {
  return (
    <form className={styles.form}>
      <div className="flex justify-center">
        <Image src="/cloud6.png" width={30} height={30} alt="logo" />
      </div>
      <div>
        <p>Email</p>
        <input type="email" />
      </div>
      <div>
        <p>Password</p>
        <input type="password" />
      </div>
      <p>
        Dont have an account ? create an account{" "}
        <a href="/signup" className="text-blue-600 cursor-pointer">
          Sign up
        </a>
      </p>
    </form>
  );
};

export default page;
