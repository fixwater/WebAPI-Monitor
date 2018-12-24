export let data = {
  host: "",
  path: "",
  repeatTime: 0,
  repeatInterval: 0,
  infos: []
};

export let validator = () => {
  let { host, path, repeatInterval, repeatTime } = data;

  /** Empty */
  if (host === "" || repeatTime === "" || repeatInterval === "") {
    return false;
  }

  return true;
};
