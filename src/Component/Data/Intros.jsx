import MyInfo from "../Content/Intro/MyInfo";
import StackCareer from "../Content/Intro/StackCareer";
import Main from "../Content/Intro/Main";
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
