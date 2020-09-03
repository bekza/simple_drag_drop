describe("Drag and Drop", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/");
    });
  
    it("should move first item to 3rd position", () => {
      // when
      dragItem(1, 3);
  
      // then
      getListItemValue(1).should("have.text", "item 2");
      getListItemValue(3).should("have.text", "item 0");
    });
  });
  
  // helper functions
  
  function dragItem(indexToMove, targetIndex) {
    const dataTranferMock = { setData: () => {}, setDragImage: () => {} };
    cy.get(`[data-rbd-draggable-id="item-2"]`).trigger("dragstart", {
      dataTransfer: dataTranferMock
    });
    cy.get(`[data-rbd-draggable-id="item-1"]`).trigger("dragover");
  }
  
  function getListItemValue(index) {
    //let innerText = document.querySelector("[data-rbd-droppable-id='droppable']").children[1].innerText;

    return cy.get(document.querySelector("[data-rbd-droppable-id='droppable']").children[1].innerText);
  }
