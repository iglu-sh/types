// Holds types for communication between the scheduler and the controller

export type healthCheckResponse = {
    status: 'OK' | 'NOK';
    uptime: number;
    version: string;
    arch: string;
    os: string;
}
