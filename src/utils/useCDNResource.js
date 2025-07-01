function useCDNResource() {
  const host = "https://d2ev60968camnq.cloudfront.net";

  const getCDNResource = (path) => {
    return `${host}${path}`;
  };

  return {
    getCDNResource,
  };
}

export default useCDNResource;
