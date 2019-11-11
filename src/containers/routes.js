import Cards from './../components/inside/Cards';
import Forms from './../components/inside/Forms';

const LoadingRoutes = () => ([
        /*{
            path :"/cards",
            name: "Cards",
            exact: true,
            template : Cards 
        },*/
        {
            path :"/forms",
            name: "Forms",
            exact: true,
            template : Forms 
        }

    ]);

export default LoadingRoutes();