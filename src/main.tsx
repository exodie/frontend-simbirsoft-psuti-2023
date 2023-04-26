// lib
import React from "react";
import ReactDOM from "react-dom/client";

// components
import Application from "./App.tsx";
import { MainTable } from "./components/table/Table.component.tsx";
import { MainCalendar } from "./components/calendars/Calendar.component.tsx";

// styles
import "./index.scss";

// routers
import { BrowserRouter, Route, Routes } from "react-router-dom";

// store
import { StoreProvider } from "./store/providers/store.provider.tsx";

// pages
import { ChoiceCompetition } from "./components/table/pages/ChoiceCompetition.page.tsx";
import { ChoiceTeam } from "./components/table/pages/ChoiceTeams.page.tsx";
import { ChoiceCommand } from "./components/table/pages/ChoiceCommand.page.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Application />} />
          <Route
            path="/table/competitions"
            element={<MainTable type="competitions" />}
          />
          <Route
            path="/table/commands"
            element={<MainTable type="commands" />}
          />
          <Route
            path="/calendar/list"
            element={<MainCalendar type="lists_matches" />}
          />
          <Route
            path="/calendar/competitions"
            element={<MainCalendar type="competitions" />}
          />
          <Route
            path="/table/choice/competition/:id"
            element={<ChoiceCompetition />}
          />
          <Route path="/table/choice/team/:id" element={<ChoiceTeam />} />
          <Route path="/table/choice/command/:id" element={<ChoiceCommand />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  </React.StrictMode>
);
