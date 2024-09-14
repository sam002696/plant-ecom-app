import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthUserHelper {
  async getUser() {
    const user = JSON.parse((await AsyncStorage.getItem("auth_user")) || "{}");
    return user || {};
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
    // save token
    let token = authData.accessToken || "";
    await AsyncStorage.setItem("access_token", token);

    // save user
    await AsyncStorage.setItem("auth_user", JSON.stringify(authData?.user));

    // save institute id
    if (authData.instituteResponse !== undefined) {
      await AsyncStorage.setItem(
        "institute_id",
        JSON.stringify(authData?.instituteResponse)
      );
    }

    // save user roles
    let roles = [];
    authData?.roles?.forEach((item) => {
      roles.push(item.roleName);
    });
    await AsyncStorage.setItem("auth_roles", JSON.stringify(roles));
  }

  async removeLoginData() {
    await AsyncStorage.removeItem("access_token");
    await AsyncStorage.removeItem("auth_user");
    await AsyncStorage.removeItem("auth_roles");
  }
}

export const AuthUser = new AuthUserHelper();
