/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars, no-undef
const router = createBrowserRouter([
    {
      path: "/",
      element: <main></main>,
      children:[
        {
            path:"/src/Pages/SecondPage/Secondpage.jsx",
            element: <SecondPage></SecondPage>
        }
      ]
    },
  ]);

  export default router