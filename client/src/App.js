import './App.css';
import React from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ReactTooltip from "react-tooltip";
import HomeRounded from "@material-ui/icons/HomeRounded";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AuthorsPage from './pages/AuthorsPage';
import OrdersPage from './pages/OrdersPage';
import DiscountCodesPage from './pages/DiscountCodesPage';
import BooksPage from './pages/BooksPage';
import CustomersPage from './pages/CustomersPage';
import BooksAuthorsPage from './pages/BooksAuthorsPage';
import BooksOrdersPage from './pages/BooksOrdersPage';
import EditAuthorsPage1 from './pages/EditAuthorsPage1';
import EditAuthorsPage2 from './pages/EditAuthorsPage2';
import EditAuthorsPage3 from './pages/EditAuthorsPage3';
import EditAuthorsPage4 from './pages/EditAuthorsPage4';
import EditOrdersPage1 from './pages/EditOrdersPage1';
import EditOrdersPage2 from './pages/EditOrdersPage2';
import EditOrdersPage3 from './pages/EditOrdersPage3';
import EditBooksPage1 from './pages/EditBooksPage1';
import EditBooksPage2 from './pages/EditBooksPage2';
import EditBooksPage3 from './pages/EditBooksPage3';
import EditCustomersPage1 from './pages/EditCustomersPage1';
import EditCustomersPage2 from './pages/EditCustomersPage2';
import EditCustomersPage3 from './pages/EditCustomersPage3';
import { Link } from 'react-router-dom';

function App() {

  //const [projectDBThing, setDBThing] = useState();

  return (

    <div className="App">
      <Router>

        <AppBar position = "static" style={{backgroundColor: "#0470AA"}}>
          <Toolbar>
          <Link to="/">
          <IconButton
            type="button"
            edge="start"
            data-tip data-for="homeTip"
            aria-label="HomePage">
            <HomeRounded />
          </IconButton>
          </Link>
          <ReactTooltip delayShow={1000} id="homeTip" place="top" effect="solid">
            Go to the Home page.
          </ReactTooltip>

          <Typography
            variant="h5">
          World's Best Online Bookstore
          </Typography>
          
          <div className = "toolBarLinks">

          <Link to="/books">
            <button
              type="button"
              className="button-medium"
              data-tip data-for="booksTip"
              aria-label="books">
            Books
            </button>
          </Link>
          <ReactTooltip delayShow={1000} id="booksTip" place="top" effect="solid">
            Go to the Books page.
          </ReactTooltip>

          <Link to="/authors">
            <button
              type="button"
              className="button-medium"
              data-tip data-for="authorsTip"
              aria-label="books">
            Authors
            </button>
          </Link>
          <ReactTooltip delayShow={1000} id="authorsTip" place="top" effect="solid">
            Go to the Authors page.
          </ReactTooltip>

          <Link to="/customers">
            <button
              type="button"
              className="button-medium"
              data-tip data-for="customersTip"
              aria-label="customers"
            >
            Customers
            </button>
          </Link>
          <ReactTooltip delayShow={1000} id="customersTip" place="bottom" effect="solid">
            Go to the Customers page.
          </ReactTooltip>

          <Link to="/orders">
            <button
              type="button"
              className="button-medium"
              data-tip data-for="ordersTip"
              aria-label="orders"
            >
            Orders
            </button>
          </Link>
          <ReactTooltip delayShow={1000} id="ordersTip" place="bottom" effect="solid">
            Go to the Orders page.
          </ReactTooltip>

          <Link to="/discount-codes">
            <button
              type="button"
              className="button-medium"
              data-tip data-for="discount_codesTip"
              aria-label="discount_codes">
            Discount_Codes
            </button>
          </Link>
          <ReactTooltip delayShow={1000} id="discount_codesTip" place="top" effect="solid">
            Go to the Discount_Codes page.
          </ReactTooltip>

          <Link to="/books_authors">
            <button
              type="button"
              className="button-medium"
              data-tip data-for="books_authorsTip"
              aria-label="books_authors"
            >
            Books_Authors
            </button>
          </Link>
          <ReactTooltip delayShow={1000} id="books_authorsTip" place="bottom" effect="solid">
            Go to the Books_Authors page.
          </ReactTooltip>

          <Link to="/books_orders">
            <button
              type="button"
              className="button-medium"
              data-tip data-for="books_ordersTip"
              aria-label="books_orders"
            >
            Books_Orders
            </button>
          </Link>
          <ReactTooltip delayShow={1000} id="books_ordersTip" place="bottom" effect="solid">
            Go to the Books_Orders page.
          </ReactTooltip>
        </div>
        </Toolbar>
      </AppBar>

        <div className="App-header">
          <br></br>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/books">
            <BooksPage />
          </Route>
          <Route path="/authors">
            <AuthorsPage />
          </Route>
          <Route path="/customers">
            <CustomersPage />
          </Route>
          <Route path="/orders">
            <OrdersPage />
          </Route>
          <Route path="/discount-codes">
            <DiscountCodesPage />
          </Route>
          <Route path="/books_authors">
            <BooksAuthorsPage/>
          </Route>
          <Route path="/books_orders">
            <BooksOrdersPage/>
          </Route>
          <Route path="/edit-books1">
            <EditBooksPage1 />
          </Route>
          <Route path="/edit-books2">
            <EditBooksPage2 />
          </Route>
          <Route path="/edit-books3">
            <EditBooksPage3 />
          </Route>
          <Route path="/edit-authors1">
            <EditAuthorsPage1 />
          </Route>
          <Route path="/edit-authors2">
            <EditAuthorsPage2 />
          </Route>
          <Route path="/edit-authors3">
            <EditAuthorsPage3 />
          </Route>
          <Route path="/edit-authors4">
            <EditAuthorsPage4 />
          </Route>
          <Route path="/edit-customers1">
            <EditCustomersPage1 />
          </Route>
          <Route path="/edit-customers2">
            <EditCustomersPage2 />
          </Route>
          <Route path="/edit-customers3">
            <EditCustomersPage3 />
          </Route>
          <Route path="/edit-orders1">
            <EditOrdersPage1 />
          </Route>
          <Route path="/edit-orders2">
            <EditOrdersPage2 />
          </Route>
          <Route path="/edit-orders3">
            <EditOrdersPage3 />
          </Route>
          </div>
          <br></br>
          <br></br>
        <footer>
        <p>&copy; 2023 Sarah Purkey & Matt Tinnel</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;