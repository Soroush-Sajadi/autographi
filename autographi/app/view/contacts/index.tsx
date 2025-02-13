import React from "react";
import Image from "next/image";
import email from "../../statics/email.png";
import tel from "../../statics/tel.png";
import { LinkedinLogo } from "./LinkedinLogo";
import { EmailLogo } from "./EmailLogo";
import { PhoneLogo } from "./PhoneLogo";
import "../style.css";

export const Contacts = () => {
  return (
    <div className="flex items-center	space-x-2">
      <div className="cursor-pointer">
        <EmailLogo />
      </div>
      <div className="cursor-pointer">
        <LinkedinLogo />
      </div>
      <div className="cursor-pointer">
        <PhoneLogo />
      </div>
    </div>
  );
};
