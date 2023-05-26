
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import RootRouter from './router';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './custom.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render("Testing");
root.render(<RouterProvider router={RootRouter} />);
