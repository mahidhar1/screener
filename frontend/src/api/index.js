import connectionInstance from "../utils/connection";

export const getData = () => connectionInstance.get("/data");
