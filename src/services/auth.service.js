import http from "@/http-common";

class AuthDataService {
  login(data) {
    return http.post("/cms/login", data).then((response) => {
      console.log(response);
      if (response.data.code == 200) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
  }

  logout() {
    localStorage.removeItem("user");
  }
}

export default new AuthDataService();
