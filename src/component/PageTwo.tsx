import { useRouteData } from "@solidjs/router";

const PageTwo = () => {

  const data: { count: number } = useRouteData();
  
  return <div>Two Page{data?.count}</div>;
};

export default PageTwo;
