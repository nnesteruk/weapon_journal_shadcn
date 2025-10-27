import { Layout } from "@/layout";
import {
  ApplicantPage,
  CaliberPage,
  LoginPage,
  ManufacturerPage,
  PerformerPage,
  ProductsCategoryPage,
  ProductsTypePage,
} from "@/pages";
import { RoutesPath } from "@/shared/config";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router";

export const RoutesProvider = () => {
  const PrivateRoute = () => {
    const isAuth = localStorage.getItem("token");
    return isAuth ? <Outlet /> : <Navigate to={RoutesPath.LOGIN} replace />;
  };

  return (
    <BrowserRouter basename={RoutesPath.BASE_NAME}>
      <Routes>
        <Route path={RoutesPath.LOGIN} element={<LoginPage />} />
        <Route element={<PrivateRoute />}>
          <Route path={RoutesPath.MAIN} element={<Layout />}>
            <Route index element={<div>main table </div>} />
            <Route path={RoutesPath.APPLICANT} element={<ApplicantPage />} />
            <Route path={RoutesPath.PRODUCT} element={<div>product</div>} />
            <Route path={RoutesPath.CALIBER} element={<CaliberPage />} />
            <Route
              path={RoutesPath.MANUFACTURER}
              element={<ManufacturerPage />}
            />
            <Route path={RoutesPath.MODEL} element={<div>model</div>} />
            <Route
              path={RoutesPath.PRODUCTS_CATEGORY}
              element={<ProductsCategoryPage />}
            />
            <Route
              path={RoutesPath.PRODUCTS_TYPE}
              element={<ProductsTypePage />}
            />
            <Route path={RoutesPath.PERFORMER} element={<PerformerPage />} />
          </Route>
        </Route>
        <Route
          path="*"
          element={<div className="text-3xl text-red-900">404</div>}
        />
      </Routes>
    </BrowserRouter>
  );
};
