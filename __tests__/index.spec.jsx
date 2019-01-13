import React from "react";
import { mount } from "enzyme";
import { Index } from "../pages/index";
import Layout from "../components/layout.js";
import Card from "../components/card.js";

describe("Pages", () => {
  describe("Index", () => {
    it("should render without throwing an error", function() {
      const wrap = mount(
        <Index
          {...{
            pages: [
              {
                words: [
                  { term: "", phon: "", intp: "", src: "", exmp: "", remb: 0 }
                ],
                index: 0
              }
            ],
            index: 0
          }}
        />
      );
      // expect(wrap.find('div').text()).toBe('')
      expect(wrap.find(Layout).length).toBeGreaterThan(0);
      expect(wrap.find(Card).length).toBeGreaterThan(0);
    });
  });
});
