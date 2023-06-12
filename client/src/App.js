/*
Citations:
    Initial adaption from "Exploration — Implementing a Full-Stack MERN App - Part 1" from CS 290 at Oregon State University.
    Date: 2023-04-05
    https://canvas.oregonstate.edu/courses/1869985/pages/exploration-implementing-a-full-stack-mern-app-part-1?module_item_id=22110234
*/

import './App.css';
import React, { useState } from 'react';
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
import EditBooksPage from './pages/EditBooksPage';
import EditAuthorsPage from './pages/EditAuthorsPage';
import EditCustomersPage from './pages/EditCustomersPage';
import EditOrdersPage from './pages/EditOrdersPage';
import EditBooksAuthorsPage from './pages/EditBooksAuthorsPage';
import EditBooksOrdersPage from './pages/EditBooksOrdersPage';
import { Link } from 'react-router-dom';

function App() {

  const [bookToEdit, setBookToEdit] = useState();
  const [authorToEdit, setAuthorToEdit] = useState();
  const [customerToEdit, setCustomerToEdit] = useState();
  const [orderToEdit, setOrderToEdit] = useState();
  const [bookAuthorToEdit, setBookAuthorToEdit] = useState();
  //const [bookOrderToEdit, setBookOrderToEdit] = useState();

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

          <Link to="/discount_codes">
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
            <BooksPage setBookToEdit={setBookToEdit}/>
          </Route>
          <Route path="/authors">
            <AuthorsPage setAuthorToEdit={setAuthorToEdit}/>
          </Route>
          <Route path="/customers">
            <CustomersPage setCustomerToEdit={setCustomerToEdit}/>
          </Route>
          <Route path="/orders">
            <OrdersPage setOrderToEdit={setOrderToEdit}/>
          </Route>
          <Route path="/discount_codes">
            <DiscountCodesPage />
          </Route>
          <Route path="/books_authors">
            <BooksAuthorsPage setBookAuthorToEdit={setBookAuthorToEdit}/>
          </Route>
          <Route path="/books_orders">
            <BooksOrdersPage />
          </Route>
          <Route path="/edit-books">
            <EditBooksPage bookToEdit={bookToEdit}/>
          </Route>
          <Route path="/edit-authors">
            <EditAuthorsPage authorToEdit={authorToEdit}/>
          </Route>
          <Route path="/edit-customers">
            <EditCustomersPage customerToEdit={customerToEdit}/>
          </Route>
          <Route path="/edit-orders">
            <EditOrdersPage orderToEdit={orderToEdit}/>
          </Route>
          <Route path="/edit-books_authors">
            <EditBooksAuthorsPage bookAuthorToEdit={bookAuthorToEdit}/>
          </Route>
          <Route path="/edit-books_orders">
            <EditBooksOrdersPage />
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