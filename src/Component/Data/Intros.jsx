import MyInfo from "../Intro/MyInfo";
import StackCareer from "../Intro/StackCareer";
import Main from "../Intro/Main";
const intros = [
  {
    tab: "MyInfo",
    content: <Main></Main>,
  },
  {
    tab: "MyInfo",
    content: <MyInfo></MyInfo>,
  },
  {
    tab: "Stack&Career",
    content: <StackCareer></StackCareer>,
  },
];

export default intros;
