import { ComposeSpecification, DefinitionsService, PropertiesConfigs, PropertiesNetworks, PropertiesSecrets, PropertiesServices, PropertiesVolumes } from 'compose.schema';
import Service from './service';

const DEFAULT_COMPOSE_VERSION = 3.9;
export const DEFAULT_SEPARATOR = ":";
export const DEFAULT_TAG_VERSION = "latest";

class C implements ComposeSpecification {
  [k: string]: unknown;
  version?: string | undefined;
  services?: PropertiesServices | undefined;
  networks?: PropertiesNetworks | undefined;
  volumes?: PropertiesVolumes | undefined;
  secrets?: PropertiesSecrets | undefined;
  configs?: PropertiesConfigs | undefined;

}

export const image = (name: string, version: number | string): string =>
  [name, version].join(DEFAULT_SEPARATOR);

export default class Tardigrade {
  #version: number;
  #services: Service[];

  constructor() {
    this.#version = DEFAULT_COMPOSE_VERSION;
    this.#services = [];
  }

  useVersion(version: number): Tardigrade {
    this.#version = version;
    return this;
  }

  addService(service: Service): Tardigrade {
    this.#services.push(service);
    return this;
  }

  addServices(...services: Service[]) {
    this.#services.push(...services);
    return this;
  }

  print(): void {}
}
