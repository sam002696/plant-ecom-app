import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthUserHelper {
  async getUser() {
    try {
      const authUser = await AsyncStorage.getItem("auth_user");
      // Check if authUser exists and parse it, otherwise return an empty object
      return authUser ? JSON.parse(authUser) : {};
    } catch (error) {
      console.error("Error retrieving user data:", error);
      return {}; // Return an empty object if there's an error
    }
  }

  async getUserId() {
    const user = JSON.parse((await AsyncStorage.getItem("auth_user")) || "{}");
    return user?.id || null;
  }

  async getUserName() {
    const user = JSON.parse((await AsyncStorage.getItem("auth_user")) || "{}");
    return user?.username || null;
  }

  async getUserFullName() {
    const user = JSON.parse((await AsyncStorage.getItem("auth_user")) || "{}");
    return user.firstName ? user.firstName : user.username || null;
  }

  async getInstituteId() {
    const institute = JSON.parse(await AsyncStorage.getItem("institute_id"));
    return parseInt(institute?.instituteId) || 1;
  }

  async getBranchId() {
    const branch = JSON.parse(await AsyncStorage.getItem("institute_id"));
    return parseInt(branch?.branchId) || 1;
  }

  async getBranchName() {
    const institute = JSON.parse(await AsyncStorage.getItem("institute_id"));
    return institute?.branchName || null;
  }

  async getUserEmployeeId() {
    const institute = JSON.parse(await AsyncStorage.getItem("institute_id"));
    return parseInt(institute?.employeeId) || 1;
  }

  async getInstituteName() {
    const institute = JSON.parse(await AsyncStorage.getItem("institute_id"));
    return institute?.instituteName || null;
  }

  async getInstituteEIIN() {
    const institute = JSON.parse(await AsyncStorage.getItem("institute_id"));
    return institute?.eiinNo || null;
  }

  async getRoles() {
    const roles = await AsyncStorage.getItem("auth_roles");
    return roles ? JSON.parse(roles) : [];
  }

  async getRolesID() {
    const rolesID = await AsyncStorage.getItem("auth_rolesID");
    return rolesID ? JSON.parse(rolesID) : [];
  }

  async isLoggedIn() {
    const token = await AsyncStorage.getItem("access_token");
    return token && token.length > 0;
  }

  async saveLoginData(authData) {
    try {
      console.log("saving login data :", authData);
      let token = authData.data.accessToken || "";
      await AsyncStorage.setItem("access_token", token);
      await AsyncStorage.setItem("auth_user", JSON.stringify(authData?.data));
    } catch (e) {
      console.error("Error saving login data:", e);
    }
  }

  async removeLoginData() {
    try {
      await AsyncStorage.removeItem("access_token");
      await AsyncStorage.removeItem("auth_user");
      await AsyncStorage.removeItem("auth_roles");
      console.log("Access token removed");
    } catch (error) {
      console.log("Error removing access token: ", error);
    }
  }
}

export const AuthUser = new AuthUserHelper();
