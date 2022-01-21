const fs = require("fs");

// hosts in JSON file for simplicity, store in a db for production applications
let hosts = require("data/hosting.json");

export const hostingRepo = {
  getAll: () => hosts,
  getById: (id) => hosts.find((x) => x.id.toString() === id.toString()),
  find: (x) => hosts.find(x),
  create,
  update,
  delete: _delete,
};

function create(host) {
  // generate new user id
  host.id = hosts.length ? Math.max(...hosts.map((x) => x.id)) + 1 : 1;

  // set date created and updated
  host.dateCreated = new Date().toISOString();
  host.dateUpdated = new Date().toISOString();

  // add and save user
  hosts.push(host);
  saveData();
}

function update(id, params) {
  const host = hosts.find((x) => x.id.toString() === id.toString());

  // set date updated
  host.dateUpdated = new Date().toISOString();

  // update and save
  Object.assign(host, params);
  saveData();
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
function _delete(id) {
  // filter out deleted user and save
  hosts = hosts.filter((x) => x.id.toString() !== id.toString());
  saveData();
}

// private helper functions

function saveData() {
  fs.writeFileSync("data/hosting.json", JSON.stringify(hosts, null, 4));
}
