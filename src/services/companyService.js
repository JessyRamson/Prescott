import requests from "./httpService";

const companyService = {
  getCompanies: async () => {
    return requests.get(`company`);
  },
};
export default companyService;
