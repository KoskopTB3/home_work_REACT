import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Meetings from "../pages/Meetings";
import TeachersList from "../pages/teachers/TeachersList";
import NewTeacher from "../pages/teachers/NewTeacher";
import DetailsTeacher from "../pages/teachers/DetailsTeacher";
import frontRoutes from "./frontRoutes";
import MainLayout from "../layouts/MainLayout";
import InfoLayout from "../layouts/InfoLayout";
import AboutApp from "../pages/AboutApp";
import AboutDev from "../pages/AboutDev";
import Page404 from "../pages/Page404";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={frontRoutes.pages.home} element={<Home />} />
        <Route path={frontRoutes.pages.teachers.root}>
          <Route index element={<TeachersList />} />
          <Route
            path={frontRoutes.pages.teachers.add}
            element={<NewTeacher key="add"/>}
          />
          <Route
            path={frontRoutes.pages.teachers.edit}
            element={<NewTeacher key="edit"/>}
          />
          <Route
            path={frontRoutes.pages.teachers.details}
            element={<DetailsTeacher />}
          />
        </Route>
        <Route path={frontRoutes.pages.meetings} element={<Meetings />} />
      </Route>
      <Route element={<InfoLayout />}>
        <Route path={frontRoutes.pages.aboutApp} element={<AboutApp />} />
        <Route path={frontRoutes.pages.aboutDev} element={<AboutDev />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default AppRoutes;
