import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { mocked } from "ts-jest";
import axios from "axios";

describe("App", () => {
  describe("Smoke Tests", () => {
    it("renders without crashing", () => {
      const div = document.createElement("div");
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it("renders without crashing when get request fails", () => {
      jest.mock('axios');
      const axiosMock = mocked(axios);
      axiosMock.get = jest.fn().mockResolvedValue(new Error());

      const div = document.createElement("div");
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  });

  // describe("")
  // beforeAll(() => {
  //   jest.mock("axios");
  //   // const axiosMock = mocked('axios');
  //   const axiosGetSpy = jest.spyOn(axios, "get").mockImplementation();
  // });

  // it("should ")
});
