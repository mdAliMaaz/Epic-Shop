class ErrorHandelr extends Error {
    statusCode: number;
    constructor(statusCode: number, message: string) {
        super(message);
        this.message = message || "Somthing went Wrong";
        this.statusCode = statusCode || 500;
    }
}

export default ErrorHandelr;