import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Footer() {
  return (
    <footer className="bg-inputsearch fixed bottom-0 w-full text-center text-primary">
      <p className="my-[10px]">
        Created with <FavoriteIcon color="primary" /> by
        <a href="https://github.com/Umesh-JNU" className="font-semibold text-secondary no-underline"> Umesh Kumar</a>
      </p>
    </footer>
  );
}
