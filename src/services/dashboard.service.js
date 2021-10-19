import http from "@/http-common";

class DashboardDataService {
  loadUserStatistics(statType, month) {
    let uri = `/dashboard/statistics/${statType}`;
    if (month != "") {
      uri += `?month=${month}`;
    }
    return http.get(uri).then((response) => {
      console.log(response);
    });
  }
}

export default new DashboardDataService();
