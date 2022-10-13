import { useRouteData } from "@solidjs/router";

const PageTwo = () => {
  const datas = useRouteData();
  console.log("datas",datas)
  
  return <div>Two Page{datas.count}</div>;
};

export default PageTwo;
