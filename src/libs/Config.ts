import Utilities from './Utilities';

export enum ConfigKeysEnum {
    port,
    bodyLimit,
    corsHeaders,
    mongoUrl
}
export enum DeploymentTypesEnum {
    test,
    local,
    prod
}

export default class Config {
    private static _instance: Config;
    private config: any = null;

    private constructor() { }

    public static get instance(): Config {
        return this._instance || (this._instance = new this());
    }

    public getConfig(name: ConfigKeysEnum): string {
        if (!this.config) {
            this.loadConfig();
        }

        return this.config[Utilities.getEnumString(ConfigKeysEnum, name)];
    }

    private loadConfig(): void {
        if (process.env.NODE_ENV === Utilities.getEnumString(DeploymentTypesEnum, DeploymentTypesEnum.local) || 
            process.env.NODE_ENV === Utilities.getEnumString(DeploymentTypesEnum, DeploymentTypesEnum.test)) {
            this.config = {
                'apiBaseUrl': 'http://localhost:4001'
            };
            return;
        }

        this.config = {
            'apiBaseUrl': 'http://localhost:4001'
        };
    }
}
