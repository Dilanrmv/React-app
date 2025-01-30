import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";
import { MemoryRouter } from "react-router-dom"; // Para envolver el componente en un router

describe("Navbar", () => {
  test("debe renderizar el logo correctamente", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const logo = screen.getByText("Prei Plant Applicatie");
    expect(logo).toBeInTheDocument();
  });
  test("debe mostrar los enlaces de navegación", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const homeLink = screen.getByText("Home");
    const rowsLink = screen.getByText("Rijen");
    const chatLink = screen.getByText("Chat");

    expect(homeLink).toBeInTheDocument();
    expect(rowsLink).toBeInTheDocument();
    expect(chatLink).toBeInTheDocument();
  });


  test("debe mostrar el componente Login en pantallas grandes", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const login = screen.getByText("Login");
    expect(login).toBeInTheDocument();
  });
});