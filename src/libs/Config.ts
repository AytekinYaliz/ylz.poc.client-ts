import Utilities from './Utilities';

export enum ConfigKeysEnum {
   localStorageKey = 'localStorageKey',
   apiBaseUrl = 'apiBaseUrl',
   customersEndpoint = 'customersEndpoint'
}
export enum DeploymentTypesEnum {
   test = 'test',
   development = 'development',
   production = 'production'
}

interface IConfig {
   localStorageKey: string;
   apiBaseUrl: string;
   customersEndpoint: string;
}
class Config {
   private static _config: IConfig = null;

   public static getConfig(name: ConfigKeysEnum): string {
      if (!Config._config) {
         Config.loadConfig();
      }
      return Config._config[name];
   }

   private static loadConfig(): void {
      if (process.env.NODE_ENV === DeploymentTypesEnum.development ||
         process.env.NODE_ENV === DeploymentTypesEnum.test) {
         Config._config = {
            localStorageKey: 'LH.Accountancy',
            apiBaseUrl: 'http://localhost:4001',
            customersEndpoint: '/api/customers'
         };
         return;
      }

      Config._config = JSON.parse((<any> process.env).config);
   }
}

Object.seal(Config);
export default Config;



/*
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
}*/
