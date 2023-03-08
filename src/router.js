import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import RootLayout from "./components/root-layout/root-layout.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout/>}>
          <Route index element={<Homepage/>} />
          <Route path="shop" element={<ShopPage/>} />
          <Route path="checkout" element={<CheckoutPage/>} />
          {/* <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <RegisterAndLogin />
              )
            }
          /> */}
        </Route>
    )
)