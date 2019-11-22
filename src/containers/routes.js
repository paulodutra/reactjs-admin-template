import Cards from './../components/inside/Cards';
import Forms from './../components/inside/Forms';
import Charts from './../components/inside/Charts';
import Dashboard from './../components/inside/Dashboard';
import DataTable from '../components/inside/DataTable';

const LoadingRoutes = () => ([
       /*{
            path :"/dashboard",
            name: "Dashboard",
            template : Dashboard 
        },
        {
            path :"/cards",
            name: "Cards",
            template : Cards 
        /*},
        {
            path :"/forms",
            name: "Forms",
            template : Forms 
        },*/
        /*{
            path :"/charts",
            name: "Charts",
            template : Charts 
        }*/
        {
            path :"/datatable",
            name: "Datatable",
            template : DataTable 
        }

    ]);

export default LoadingRoutes();