
import Countries from "../pages/Countries";
import Country from "../pages/Country";

export const routes = [
    {path: "/", element: Countries, exact: true},
    {path: "/:name", element: Country}
    // {path: "/:name", element: Country, exact: true},
    // {path: "/*", element: Countries, exact: true},
]