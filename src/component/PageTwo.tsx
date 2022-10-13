import { useRouteData } from "@solidjs/router";

const PageTwo = () => {
  const data: {} = useRouteData();
  console.log("datas", data);

  return <div>Two Page{data?.count}</div>;
};

export default PageTwo;
