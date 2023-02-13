import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersCard from '../components/UsersCard/UsersCard'

export default function Router() {
   return(
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<UsersCard/>}/>
      </Routes>
    </BrowserRouter>
   );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);