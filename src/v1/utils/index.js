import pick from "lodash/pick.js";
export const getFieldsData = ({ fields = [], object = {} }) => {
  return pick(object, fields);
};
