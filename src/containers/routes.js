import Component1 from './../components/Component1';

const LoadingRoutes = () => (
    [
        {
            path :"/1",
            name: "Home",
            exact : true,
            template : Component1 
        }

    ]
);

export default LoadingRoutes();