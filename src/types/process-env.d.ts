declare module "process" {
    global {
        namespace NodeJS {
            interface ProcessEnv {
                SEND_FROM: string;
                SEND_PASSWORD: string;
                SEND_TO: string;
            }
        }
    }
}
