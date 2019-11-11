import Cards from '../components/inside/Cards';

const LoadingRoutes = () => (
    [
        {
            path :"/cards",
            name: "Cards",
            exact : true,
            template : Cards 
        }

    ]
);

export default LoadingRoutes();