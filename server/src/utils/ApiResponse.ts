class ApiResponse {
    data?: any;
    message?: string;
    sucess?: boolean

    constructor(sucess: boolean, message: string, data?: any) {
        this.message = message;
        this.data = data
        this.sucess = sucess
    }
}

export default ApiResponse