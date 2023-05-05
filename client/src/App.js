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
import BooksPage from './pages/BooksPage';
import CustomersPage from './pages/CustomersPage';
import BooksAuthorsPage from './pages/BooksAuthorsPage';
import BooksOrdersPage from './pages/BooksOrdersPage';
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
            style={{
              marginRight: 20,
            }}
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

          <Link to="/books">
            <button
              type="button"
              edge="end"
              data-tip data-for="booksTip"
              style={{
                marginLeft: 20,
              }}
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
              edge="end"
              data-tip data-for="authorsTip"
              style={{
                marginLeft: 20,
              }}
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
              edge="end"
              data-tip data-for="customersTip"
              style={{
                marginLeft: 20,
              }}
              aria-label="customers"
            >
            Customers
            </button>
          </Link>
          <ReactTooltip delayShow={1000} id="authorsTip" place="top" effect="solid">
            Go to the Customers page.
          </ReactTooltip>

          <Link to="/orders">
            <button
              type="button"
              edge="end"
              data-tip data-for="ordersTip"
              style={{
                marginLeft: 20,
              }}
              aria-label="orders"
            >
            Orders
            </button>
          </Link>
          <ReactTooltip delayShow={1000} id="authorsTip" place="top" effect="solid">
            Go to the Orders page.
          </ReactTooltip>

          <Link to="/books_authors">
            <button
              type="button"
              edge="end"
              data-tip data-for="books_authorsTip"
              style={{
                marginLeft: 20,
              }}
              aria-label="books_authors"
            >
            Books_Authors
            </button>
          </Link>
          <ReactTooltip delayShow={1000} id="books_authorsTip" place="top" effect="solid">
            Go to the Books_Authors page.
          </ReactTooltip>

          <Link to="/books_orders">
            <button
              type="button"
              edge="end"
              data-tip data-for="books_ordersTip"
              style={{
                marginLeft: 20,
              }}
              aria-label="books_orders"
            >
            Books_Orders
            </button>
          </Link>
          <ReactTooltip delayShow={1000} id="books_ordersTip" place="top" effect="solid">
            Go to the Books_Orders page.
          </ReactTooltip>

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
          <Route path="/books_authors">
            <BooksAuthorsPage/>
          </Route>
          <Route path="/books_orders">
            <BooksOrdersPage/>
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