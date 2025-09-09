import { FaEnvelope, FaFacebook, FaUserCircle } from "react-icons/fa";
import { MdOutlineKey } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

export const loginOptions = [
  {
    icon: FcGoogle,
    title: "Google",
  },
  {
    icon: FaFacebook,
    title: "Facebook",
    class: "text-blue-600",
  },
];

export const userFields = [
  {
    name: "username",
    label: "Username",
    placeholder: "username",
    type: "text",
    icon: FaUserCircle,
  },
  {
    name: "email",
    label: "Email",
    placeholder: "username@gmail.com",
    type: "email",
    icon: FaEnvelope,
  },
  {
    name: "password",
    label: "Password",
    placeholder: "password",
    type: "password",
    icon: MdOutlineKey,
  },
];

export const initialUserState = {
  username: "",
  email: "",
  password: "",
};
