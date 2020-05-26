const templateRender = (template, data) => {
    const paramsRex = /\{\{(.*?)\}\}/g;
    return template
      .replace(paramsRex, (expression) =>
        expression.slice(2, -2).chain((name) => {
          let value = data[name] !== undefined ? data[name] : expression;
          // return typeof value == "number" ? value.toLocaleString() : value;
          return value;
        })
      )
      .replace(/\s\s+/g, " ");
  };
  
export const buildQueryUrl = (query, params = {}) => {
    const baseURL = `https://maps.geografia.com.au`;
    const username = "casey";
    const sqlApi = `/user/${username}/api/v2/sql`;
    const q = templateRender(query, params);
    return `${baseURL}/${sqlApi}?q=${q}`;
  };
  
