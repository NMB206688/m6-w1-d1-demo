// factory/gadgetFactory.js
const Laptop = require("./laptop");
const Tablet = require("./tablet");

// Map string type -> constructor
const gadget = {
  Laptop,
  Tablet,
};

module.exports = {
  createGadget(type, attributes) {
    const GadgetType = gadget[type];
    if (!GadgetType) {
      throw new Error(`Unknown gadget type: ${type}`);
    }
    return new GadgetType(attributes);
  },
};
